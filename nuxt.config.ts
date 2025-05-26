export default defineNuxtConfig({
  app: {
    head: {
      title: "RV Rioflorido Construction",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { name: "application-name", content: "RV Rioflorido" },
        { property: "og:site_name", content: "RV Rioflorido" },
        //open graph
        { name: "og:title", content: "RV Rioflorido Construction" },
        { property: "og:title", content: "RV Rioflorido Construction" },
        {
          property: "og:description",
          content:
            "Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions",
        },
        { property: "og:image", content: "/thumbnail-logo.png" },
        { property: "og:url", content: "https://rioflorido.nuxt.dev" },
        { property: "og:type", content: "website" },
        //twitter
        { name: "twitter:title", content: "RV Rioflorido Construction" },
        {
          name: "twitter:description",
          content:
            "Your Dream Home Starts Here, Experienced Civil Engineers Delivering Complete Construction Solutions",
        },
        { name: "twitter:image", content: "/thumbnail-logo.png" },
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "description",
          content:
            "RV Rioflorido Construction is an all-in-one contractor for general construction offering quality, safety, and reliability.",
        },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          charset: "utf-8",
        },
        {
          name: "google-site-verification",
          content: "bvqs3WO0uSNy_FXnJUya5cJlnTf7kJC0k_nBafABfJ8",
        },
        { name: "robots", content: "index, follow" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/svg+xml",
          href: "/images/logo/secondary-logo.svg",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/logo/secondary-logo.svg",
        },
        {
          rel: "preload",
          as: "style",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/icon?family=Material+Icons",
        },
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
          type: "text/javascript",
        },
        //JSON-LD Schema Markup
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "RV Rioflorido Construction",
            url: "https://rioflorido.nuxt.dev",
            sameAs: ["https://www.facebook.com/profile.php?id=100083308930581"],
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+63-917-144-1538",
              contactType: "Customer Service",
              areaServed: "PH",
              availableLanguage: ["English", "Filipino"],
            },
          }),
        },
        //Google reCAPTCHA
        {
          src: "https://www.google.com/recaptcha/api.js",
          async: true,
          defer: true,
        },
      ],
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxthub/core",
    "@nuxtjs/robots",
    [
      "@nuxtjs/sitemap",
      {
        hostname: "https://rioflorido.nuxt.dev",
        gzip: true,
        trailingSlash: true,
      },
    ],
  ],
  ssr: true,
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  components: true,
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
  },
  plugins: [
    // Registering the baguettebox plugin
    "~/plugins/baguettebox.js",
  ],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL, // This is private, server-only
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID, // public, server-only
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID, // public, server-only
      emailjsUserId: process.env.EMAILJS_USER_ID, // public, server-only
      siteUrl: "https://rioflorido.nuxt.dev", //site url
    },
  },
  nitro: {
    routeRules: {
      "/robots.txt": { static: true },
      // Apply headers to all routes
      "/**": {
        headers: {
          "Content-Security-Policy": `
                default-src 'self';
                script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.jsdelivr.net https://www.google.com https://www.gstatic.com https://cdn.emailjs.com;
                style-src 'self' https://fonts.googleapis.com 'unsafe-inline';
                font-src 'self' https://fonts.gstatic.com data:;
                img-src 'self' data:;
                connect-src 'self' https://api.emailjs.com https://www.google.com https://www.gstatic.com;
                frame-src https://www.google.com https://www.gstatic.com;
                object-src 'none';
                base-uri 'self';
                frame-ancestors 'self';
              `
            .replace(/\s{2,}/g, " ")
            .trim(),
          "X-Content-Type-Options": "nosniff",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "Permissions-Policy":
            "camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)",
          "X-Frame-Options": "DENY",
          "X-XSS-Protection": "1; mode=block",
          "Strict-Transport-Security":
            "max-age=63072000; includeSubDomains; preload",
        },
      },
    },
  },
});
