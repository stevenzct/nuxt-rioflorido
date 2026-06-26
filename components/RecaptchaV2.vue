<template>
    <div>
      <div id="recaptcha" class="g-recaptcha" data-sitekey="6LfZYMUqAAAAADsDpcdZ2EHvh2WZRvf1KumAAftP"></div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecaptchaV2',
    props: {
      sitekey: {
        type: String,
        required: true,
      },
    },
    async mounted() {
      await this.loadRecaptchaScript();

      window.grecaptcha?.ready(() => {
        window.grecaptcha.render('recaptcha', {
          sitekey: this.sitekey,
          callback: this.onCaptchaVerified,
          'expired-callback': this.onCaptchaExpired,
        });
      });
    },
    methods: {
      loadRecaptchaScript() {
        if (window.grecaptcha) {
          return Promise.resolve();
        }

        const existingScript = document.querySelector('script[data-recaptcha-v2]');

        if (existingScript) {
          return new Promise((resolve) => {
            existingScript.addEventListener('load', resolve, { once: true });
          });
        }

        return new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://www.google.com/recaptcha/api.js';
          script.async = true;
          script.defer = true;
          script.dataset.recaptchaV2 = 'true';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      },
      onCaptchaVerified(response) {
        this.$emit('verify', response);
      },
      onCaptchaExpired() {
        this.$emit('expired');
      },
    },
  };
  </script>
