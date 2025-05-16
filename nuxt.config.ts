export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  components: true,
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
  },
  app: {
    head: {
      meta: [
        { name: 'description', content: 'Rioflorido Construction' },
        {
          name: 'google-site-verification',
          content: 'kIURHvlriUlkIoMsREThIoqa3NTgfcSz10RSV0tXbQc',
        },
      ],
      link: [
        {
          rel: 'preload',
          as: 'style',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          onload: "this.onload=null;this.rel='stylesheet'",
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons'
        }
      ],
      script:[
        {
       src:"https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js",
        type: 'text/javascript',
      },
      {
        src: "https://www.google.com/recaptcha/api.js",
        async: true,
        defer: true,
      }
    ]
    },
  },
  plugins: [
    // Registering the baguettebox plugin
    '~/plugins/baguettebox.js',
  ],
  runtimeConfig: {
    apiBaseUrl: process.env.API_BASE_URL, // This is private, server-only
    public: {
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID, // public, server-only
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID, // public, server-only
      emailjsUserId: process.env.EMAILJS_USER_ID, // public, server-only
    }
  },
  nitro: {
    routeRules: {
      // Apply headers to all routes
      '/**': {
        headers: {
              'Content-Security-Policy': `
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
              `.replace(/\s{2,}/g, ' ').trim(),
              'X-Content-Type-Options': 'nosniff',
              'Referrer-Policy': 'strict-origin-when-cross-origin',
              'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), fullscreen=(self)' 
        }
      }
    }
  }
})
