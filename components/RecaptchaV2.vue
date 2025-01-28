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
    mounted() {
      window.grecaptcha.ready(() => {
        window.grecaptcha.render('recaptcha', {
          sitekey: this.sitekey,
          callback: this.onCaptchaVerified,
          'expired-callback': this.onCaptchaExpired,
        });
      });
    },
    methods: {
      onCaptchaVerified(response) {
        this.$emit('verify', response);
      },
      onCaptchaExpired() {
        this.$emit('expired');
      },
    },
  };
  </script>