<template>
  <div class=" ">
    <section class="h-screen" id="login">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-32 lg:py-40">
          <form
            action=""
            class="w-auto md:w-[480px] mx-auto bg-white p-8 md:p-12 rounded-md"
            id="form"
          >
            <div class="py-4">
              <h1
                class="text-center text-[24px] md:text-[32px] pb-1 font-neue-montreal font-bold text-gray-900 leading-tight"
              >
                Forgot your password?
              </h1>
              <p class="text-center pb-4 font-neue-montreal">
                Please enter your email to reset your password
              </p>

              <label
                for="email"
                class="font-neue-montreal block mb-2 text-base font-semibold text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                class="font-neue-montreal font-normal bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <button
              type="submit"
              class="font-neue-montreal bg-[#40D183] w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-4 text-center"
            >
              Confirm Email
            </button>

            <div class="flex items-center justify-between py-4 pb-6">
              <div class="flex items-start">
                <div class="font-neue-montreal font-normal text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Already have an account?</label
                  >
                  <NuxtLink
                    to="/adminLogin"
                    class=" ms-1 font-neue-montreal text-sm font-medium text-[#287EFF] hover:underline dark:text-primary-500"
                    >Login</NuxtLink
                  >
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup></script>

<style scoped>
#login {
  background: linear-gradient(
    99deg,
    #fff 4.65%,
    #fffbf4 55.44%,
    #ffe1e1 95.35%
  );
}
#form {
  box-shadow: 0px 10px 24px 13px rgba(190, 190, 190, 0.1);
}
</style>
