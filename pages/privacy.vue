<template>
    <div>
      <AppHeader :isHeroWhite="true" />
      <section class="h-auto bg-white">
        <div class="h-full w-full">
          <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
            <div class="mt-20 md:mt-28 max-w-[1120px] mx-auto">
              <h1
                class="pb-4 lg:pb-[48px] text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold"
              >
                {{ privacyPolicy.title }}
              </h1>
              <p
                v-for="(paragraph, index) in privacyPolicy.introduction"
                :key="index"
                class="font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] md:text-[20px]"
              >
                {{ paragraph }}
              </p>
  
              <div v-for="(section, index) in privacyPolicy.sections" :key="index">
                <p
                  class="font-neue-montreal font-bold text-black leading-[1.22] w-auto text-[16px] md:text-[24px] pt-4 lg:pt-8"
                >
                  {{ section.title }}
                </p>
                <div v-for="(content, contentIndex) in section.content" :key="contentIndex">
                  <p
                    v-if="typeof content === 'string'"
                    class="font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] pt-2 md:text-[20px]"
                  >
                    {{ content }}
                  </p>
                  <ul v-else-if="content.type === 'list'" class="list-disc">
                    <li
                      v-for="(item, itemIndex) in content.items"
                      :key="itemIndex"
                      class="ms-6 font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] md:text-[20px]"
                    >
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import AppHeader from '~/components/AppHeader.vue';
  
  const privacyPolicy = {
    title: "Privacy Policy",
    introduction: [
      "At RV Rioflorido, we are committed to protecting your privacy.",
      "This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website www.RVRioflorido.com and interact with our services. By using our website, you agree to the terms outlined in this policy."
    ],
    sections: [
      {
        title: "Information We Collect",
        content: [
          "We may collect the following personal information when you use our website:",
          {
            type: "list",
            items: [
              "Contact Information: Name, email address, and any other information you provide in the contact form (e.g., project details).",
              "CAPTCHA Data: To prevent automated bots from submitting forms, we use CAPTCHA technology. This process may collect data related to your interaction with the CAPTCHA.",
              "Technical Information: This may include your IP address, browser type, device type, and usage data collected via cookies or other tracking technologies."
            ]
          }
        ]
      },
      {
        title: "How We Use Your Information",
        content: [
          "We use the information you provide to:",
          {
            type: "list",
            items: [
              "Respond to your inquiries or requests for quotes and project information.",
              "Process and manage your project details to improve our services.",
              "Prevent spam and ensure the security of our forms through CAPTCHA verification.",
              "Improve the functionality and user experience of our website."
            ]
          }
        ]
      },
      {
        title: "Data Sharing and Disclosure",
        content: [
          "We do not sell, trade, or otherwise transfer your personal information to third parties unless required by law or with your consent. We may share data with trusted third-party service providers who assist us in operating our website and conducting business (e.g., email services, security providers). These parties are obligated to keep your information confidential."
        ]
      },
      {
        title: "Cookies and Tracking Technologies",
        content: [
          "Our website may use cookies and similar tracking technologies to enhance your experience. Cookies help us analyze website traffic, provide personalized content, and track users’ activities on the site. You can control cookie settings through your browser preferences."
        ]
      },
      {
        title: "Data Security",
        content: [
          "We use industry-standard security measures to protect your personal information. However, no method of data transmission over the internet or storage system is 100% secure, and we cannot guarantee complete security."
        ]
      },
      {
        title: "Your Rights",
        content: [
          "You have the right to:",
          {
            type: "list",
            items: [
              "Access the personal data we hold about you.",
              "Request corrections to any inaccurate data.",
              "Opt-out of marketing communications (if applicable).",
              "Request the deletion of your personal data, subject to legal obligations."
            ]
          }
        ]
      },
      {
        title: "Third-Party Links",
        content: [
          "Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those websites. We encourage you to review the privacy policies of any third-party sites you visit."
        ]
      },
      {
        title: "Changes to This Privacy Policy",
        content: [
          "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any updates will be posted on this page with a revised 'Effective Date.'"
        ]
      },
      {
        title: "Contact Us",
        content: [
          "If you have any questions or concerns about this Privacy Policy, please contact us at:",
          "RV Rioflorido",
          "Email: rv.riocon@gmail.com",
          "Phone: 09171441538"
        ]
      },
    ]
  };
  </script>
  
  <style scoped></style>