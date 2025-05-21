export function useDefaultHead(title) {
  useHead({
    titleTemplate: '%s - RV Rioflorido Construction',
    title: title || 'RV Rioflorido Construction',
    htmlAttrs: {
      lang: 'en',
    },
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/images/logo/secondary-logo.svg',
      },
    ],
  });
}
