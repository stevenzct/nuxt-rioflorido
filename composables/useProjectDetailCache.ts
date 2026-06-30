const pendingProjectDetailRequests = new Map<string, Promise<unknown>>();

export const useProjectDetailCache = () => {
  const projectDetailCache = useState<Record<string, unknown>>(
    "project-detail-cache",
    () => ({})
  );

  const normalizeId = (id: unknown) => String(id || "").trim();

  const getProjectDetail = (id: unknown) => {
    const projectId = normalizeId(id);

    return projectId ? projectDetailCache.value[projectId] : null;
  };

  const isProjectDetailComplete = (project: unknown) => {
    if (!project || typeof project !== "object") {
      return false;
    }

    return !(project as { __isSummary?: boolean }).__isSummary;
  };

  const setProjectSummary = (id: unknown, project: unknown) => {
    const projectId = normalizeId(id);

    if (!projectId || !project || isProjectDetailComplete(getProjectDetail(projectId))) {
      return;
    }

    projectDetailCache.value = {
      ...projectDetailCache.value,
      [projectId]: {
        ...(project as Record<string, unknown>),
        gallery: Array.isArray((project as { gallery?: unknown }).gallery)
          ? (project as { gallery: unknown[] }).gallery
          : [],
        __isSummary: true,
      },
    };
  };

  const setProjectDetail = (id: unknown, project: unknown) => {
    const projectId = normalizeId(id);

    if (!projectId || !project) {
      return;
    }

    projectDetailCache.value = {
      ...projectDetailCache.value,
      [projectId]: {
        ...(project as Record<string, unknown>),
        __isSummary: false,
      },
    };
  };

  const prefetchProjectDetail = async (id: unknown) => {
    const projectId = normalizeId(id);

    if (!projectId) {
      return null;
    }

    const cachedProject = getProjectDetail(projectId);

    if (isProjectDetailComplete(cachedProject)) {
      return cachedProject;
    }

    const pendingRequest = pendingProjectDetailRequests.get(projectId);

    if (pendingRequest) {
      return pendingRequest;
    }

    const request = $fetch(`/api/projects/${encodeURIComponent(projectId)}`)
      .then((project) => {
        setProjectDetail(projectId, project);
        return project;
      })
      .finally(() => {
        pendingProjectDetailRequests.delete(projectId);
      });

    pendingProjectDetailRequests.set(projectId, request);

    return request;
  };

  return {
    getProjectDetail,
    isProjectDetailComplete,
    setProjectDetail,
    setProjectSummary,
    prefetchProjectDetail,
  };
};
