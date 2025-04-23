<template>
  <div>
    <!-- Hero Section -->
    <section id="contact-hero" class="h-[300px] lg:h-[494px]">
      <div class="h-full w-full flex flex-col justify-end">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="text-left">
            <h1 class="lg:py-8 text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold">
              Here is how to get in touch with us.
            </h1>
          </div>
        </div>
      </div>
    </section>

    <!-- form section -->
    <section id="forms-section" class="h-auto">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-10 lg:py-16">
          <form @submit.prevent="submitForm" class="max-w-screen-2xl mx-auto">
            <!-- name -->
            <div class="w-full lg:w-10/12">
              <div class="relative mb-5 group py-3">
                <input
                  v-model="form.firstName"
                  type="text"
                  name="floating_first_name"
                  id="floating_first_name"
                  minlength="3"
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  :class="{ 'border-red-500': errors.firstName }"
                  required
                />
                <label
                  for="floating_first_name"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
                <span v-if="errors.firstName" class="text-red-500 text-sm">
                  Name must be minimum of 3 characters length
                </span>
              </div>

              <!-- email -->
              <div class="relative mb-5 group py-3">
                <input
                  v-model="form.email"
                  type="email"
                  name="floating_email"
                  id="floating_email"
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  :class="{ 'border-red-500': errors.email }"
                  required
                />
                <label
                  for="floating_email"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Email
                </label>
                <span v-if="errors.email" class="text-red-500 text-sm">
                  Please enter a valid email address
                </span>
              </div>

              <!-- Tell us the project -->
              <div class="relative mb-5 group py-3">
                <input
                  v-model="form.projectName"
                  type="text"
                  name="project_name"
                  id="project_name"
                  class="font-neue-montreal font-normal leading-[94%] text-[28px] md:text-[38px] block py-2 lg:py-6 px-0 w-full text-sm text-gray-700 bg-transparent border-0 border-b-[3px] md:border-b-4 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-black focus:outline-none focus:ring-0 focus:border-gray-600 peer"
                  placeholder=" "
                  :class="{ 'border-red-500': errors.projectName }"
                  required
                />
                <label
                  for="project_name"
                  class="font-neue-montreal font-bold leading-[94%] text-[28px] md:text-[48px] text-black absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Tell us the project
                </label>
                <span v-if="errors.projectName" class="text-red-500 text-sm">
                  This field is required
                </span>
              </div>

              <!-- reCAPTCHA -->
              <div class="relative mb-5 group py-3">
                <RecaptchaV2
                  sitekey="6LfZYMUqAAAAADsDpcdZ2EHvh2WZRvf1KumAAftP"
                  @verify="onCaptchaVerified"
                  @expired="onCaptchaExpired"
                />
                <span v-if="errors.captcha" class="text-red-500 text-sm">
                  Please complete the CAPTCHA
                </span>
              </div>

              <div class="flex justify-end">
                <button
                  type="submit"
                  class="font-neue-montreal font-bold h-[55px] rounded-[4px] text-gray-900 text-[16px] bg-white border border-gray-400 px-8 py-3.5 my-4 md:w-[200px] transition ease-out duration-300 hover:bg-gray-900 hover:text-white"
                >
                  Send message
                </button>
              </div>
              <div
                v-if="showSuccessMessage"
                class="p-4 mb-4 font-neue-montreal font-bold text-[24px] md:text-[32px] text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span>Thanks for inquiry! We'll contact you shortly.</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- contacts section -->
    <section id="contacts-section" class="h-auto bg-[#F5F9FC]">
      <div class="h-full w-full">
        <!-- links contact -->
        <div class="max-w-screen-2xl mx-auto px-4 py-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- phone contacts -->
          <div>
            <p class="font-neue-montreal font-normal text-[18px] text-[#494949]">
              Call us
            </p>
            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+63427108762">
                042 710 8762 Telephone
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </a>
            </p>
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+639171441538">
                0917-144-1538 Globe
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </a>
            </p>
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a class="relative group" href="tel:+639696012447">
                0969-601-2447 Smart
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </a>
            </p>
            <p class="font-neue-montreal font-normal text-[16px] text-[#696969]">
              If you prefer to talk in person
            </p>
          </div>

          <!-- email -->
          <div>
            <p class="font-neue-montreal font-normal text-[18px] text-[#494949]">
              Send a text
            </p>
            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a
                href="mailto:hello.rioflorido@gmail.com"
                class="relative group"
                aria-label="Email RV Rioflorido Construction"
              >
                hello.rioflorido@gmail.com
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </a>
            </p>
            <p class="font-neue-montreal font-normal text-[16px] text-[#696969]">
              Tell us all about the project
            </p>
          </div>

          <!-- social -->
          <div>
            <p class="font-neue-montreal font-normal text-[18px] text-[#494949]">
              Follow us on social media
            </p>
            <hr />
            <p class="font-neue-montreal font-bold text-[24px] md:text-[32px]">
              <a
                class="relative group"
                href="https://www.facebook.com/profile.php?id=100083308930581"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
              >
                Facebook
                <span
                  :class="[
                    'bg-black',
                    'absolute bottom-0 left-0 w-full h-[1px] transform scale-x-0 origin-bottom-right transition-transform duration-200 ease-out group-hover:scale-x-100 group-hover:origin-bottom-left',
                  ]"
                ></span>
              </a>
            </p>
            <p class="font-neue-montreal font-normal text-[16px] text-[#696969]">
              If you want to keep updated
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { sendEmail } from "@/services/emailService"; // Adjust the path as necessary
import RecaptchaV2 from "@/components/RecaptchaV2.vue"; // Adjust the path as necessary

const form = reactive({
  firstName: "",
  email: "",
  projectName: "",
});

const errors = reactive({
  firstName: false,
  email: false,
  projectName: false,
  captcha: false,
});

const showSuccessMessage = ref(false);
const captchaVerified = ref(false);

const onCaptchaVerified = (response) => {
  captchaVerified.value = true;
  errors.captcha = false;
};

const onCaptchaExpired = () => {
  captchaVerified.value = false;
};

const submitForm = () => {
  // Reset errors
  Object.keys(errors).forEach((key) => {
    errors[key] = false;
  });

  // Validate fields
  if (form.firstName.length < 3 || form.firstName.length > 10) {
    errors.firstName = true;
  }
  if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = true;
  }
  if (!form.projectName) {
    errors.projectName = true;
  }
  if (!captchaVerified.value) {
    errors.captcha = true;
  }

  // If no errors, submit form
  if (!Object.values(errors).includes(true)) {
    // Handle form submission here, like sending an API request
    sendEmail({
      from_name: form.firstName,
      from_email: form.email,
      project_name: form.projectName,
      'g-recaptcha-response': grecaptcha.getResponse(), // Add CAPTCHA response
    })
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Show success message
        showSuccessMessage.value = true;
        // Hide success message after 5 seconds
        setTimeout(() => {
          showSuccessMessage.value = false;
        }, 5000);
        // Optionally, you can reset the form here
        form.firstName = "";
        form.email = "";
        form.projectName = "";
        captchaVerified.value = false;
        grecaptcha.reset(); // Reset CAPTCHA
      })
      .catch((error) => {
        console.error("Failed to send email", error);
      });
  }
};

useDefaultHead('Contact - RV Rioflorido Construction')
</script>

<style scoped>
#contact-hero {
  background: url(../assets/images/projects/abstract.webp);
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 8%;
}
</style>