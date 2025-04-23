<template>
  <div>
    <AppHeader :isHeroWhite="true" />
    <section class="h-auto bg-white">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl mx-auto px-4 py-8 w-full">
          <div class="mt-20 md:mt-28 max-w-[1120px] mx-auto pb-4 lg:pb-[48px]">
            <h1 class="pb-4 lg:pb-[48px] text-black text-4xl md:text-7xl lg:text-8xl font-neue-montreal font-bold">
              {{ privacyPolicy.title }}
            </h1>
            <p v-for="(paragraph, index) in privacyPolicy.introduction" :key="index"
              class="font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] md:text-[20px]">
              {{ paragraph }}
            </p>

            <div v-for="(section, index) in privacyPolicy.sections" :key="index">
              <p
                class="font-neue-montreal font-bold text-black leading-[1.22] w-auto text-[16px] md:text-[24px] pt-4 lg:pt-8">
                {{ section.title }}
              </p>
              <div v-for="(content, contentIndex) in section.content" :key="contentIndex">
                <p v-if="typeof content === 'string'"
                  class="font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] pt-2 md:text-[20px]"
                  v-html="content"></p>
                <ul v-else-if="content.type === 'list'" class="list-disc">
                  <li v-for="(item, itemIndex) in content.items" :key="itemIndex"
                    class="ms-6 font-neue-montreal font-normal text-black leading-[1.22] w-auto text-[16px] md:text-[20px]">
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
import AppHeader from "~/components/AppHeader.vue";

const privacyPolicy = {
  title: "Terms of Service",
  introduction: [
    'Welcome to RV Rioflorido ("we," "our," or "us"). By accessing or using our website, www.RVRioflorido.com, you agree to comply with these Terms of Service. If you do not agree, please refrain from using our website and services.',
  ],
  sections: [
    {
      title: "Acceptance of Terms",
      content: [
        "By using our website, you agree to abide by these Terms of Service, our Privacy Policy, and any other guidelines or policies we post. These terms govern your access to and use of our website and services.",
      ],
    },
    {
      title: "Changes to Terms",
      content: [
        "We reserve the right to update, modify, or change these Terms of Service at any time. Any updates will be posted on this page with a revised 'Effective Date.' Continued use of our website after any changes to these Terms will constitute your acceptance of the modified Terms.",
      ],
    },
    {
      title: "Use of Our Website",
      content: [
        "You agree to use our website responsibly and for lawful purposes only. You may not:",
        {
          type: "list",
          items: [
            "Violate any applicable laws or regulations.",
            "Upload or distribute any harmful content such as viruses, malware, or unauthorized advertisements.",
            "Attempt to disrupt, overload, or hack the website or its services.",
          ],
        },
      ],
    },
    {
      title: "Services Provided",
      content: [
        "RV Rioflorido offers a variety of construction services, including but not limited to residential, commercial, and industrial construction, renovation and remodeling, project management, and engineering and design services. We may modify or discontinue certain services at our discretion, with or without notice.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content, including but not limited to designs, trademarks, logos, text, and images, found on our website is owned by RV Rioflorido or used with proper authorization. You may not copy, reproduce, or distribute any materials from our website without prior written consent.",
      ],
    },
    {
      title: "Data Collection and Privacy",
      content: [
        "We collect personal information as outlined in our Privacy Policy. By using our website, you consent to the collection and use of your personal data in accordance with our Privacy Policy.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "While we strive to ensure the accuracy and security of our website and services, RV Rioflorido is not liable for any damages, losses, or issues arising from:",
        {
          type: "list",
          items: [
            "The use or inability to use our website.",
            "Errors, inaccuracies, or omissions in the website content.",
            "Viruses, bugs, or security breaches.",
          ],
        },
      ],
    },
    {
      title: "Third-Party Links",
      content: [
        "Our website may contain links to third-party websites for convenience or additional services. We are not responsible for the content, privacy practices, or terms of service of these third-party websites. We encourage you to review their policies.",
      ],
    },
    {
      title: "Termination of Access",
      content: [
        "We reserve the right to suspend or terminate your access to our website at our discretion, without prior notice, if you violate any of these Terms of Service or engage in any harmful behavior.",
      ],
    },
    {
      title: "Governing Law",
      content: [
        "These Terms of Service are governed by and shall be construed in accordance with the laws of the Philippines, without regard to its conflict of law principles.",
      ],
    },
    {
      title: "Contact Us",
      content: [
        "If you have any questions or concerns regarding these Terms of Service, please contact us at:",
        "Facebook: <a href='https://www.facebook.com/profile.php?id=100083308930581'>RV Rioflorido</a>",
        "Email: <a href='mailto:rv.riocon@gmail.com'>rv.riocon@gmail.com</a>",
        "Phone: <a href='tel:09171441538'>09171441538</a>",
      ],
    },
  ],
};

useDefaultHead('Terms - RV Rioflorido Construction')
</script>

<style scoped></style>