export function useDefaultHead(title) {
  useHead({
    title,
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
