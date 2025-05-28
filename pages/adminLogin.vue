<template>
  <div class=" ">
    <section class="h-screen" id="login">
      <div class="h-full w-full">
        <div class="max-w-screen-2xl px-4 mx-auto py-48">
          <form
            @submit="handleLogin"
            action=""
            class="w-auto md:w-[400px] mx-auto bg-white p-8 md:p-12 rounded-md"
            id="form"
          >
            <div>
              <h1
                class="text-center text-[24px] md:text-[32px] pb-2 font-neue-montreal font-bold text-gray-900"
              >
                Login
              </h1>

              <label
                for="email"
                class="font-neue-montreal block mb-2 text-base font-semibold text-gray-90"
                >Email address</label
              >
              <input
                v-model="email"
                type="email"
                name="email"
                id="email"
                class="font-neue-montreal font-normal bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"
                required=""
              />
            </div>
            <div>
              <label
                for="password"
                class="pt-4 font-neue-montreal block mb-2 text-base font-semibold text-gray-900"
                >Password</label
              >
              <input
                :type="showPassword ? 'text' : 'password'"
                v-model="password"
                id="hs-toggle-password-with-checkbox"
                placeholder="Enter your password"
                class="font-neue-montreal bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required=""
              />
            </div>
            <div class="flex items-center justify-between py-4 pb-6">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="hs-toggle-password-checkbox"
                    type="checkbox"
                    v-model="showPassword"
                    class="font-neue-montreal font-normal w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="font-neue-montreal font-normal ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >Show password</label
                  >
                </div>
              </div>
              <NuxtLink
                to="/adminForgotpass"
                class="font-neue-montreal text-sm font-medium text-[#287EFF] hover:underline dark:text-primary-500"
                >Forgot password?</NuxtLink
              >
            </div>

            <button
              type="submit"
              class="font-neue-montreal bg-[#40D183] w-full text-white bg-primary-600   font-medium rounded-lg text-base px-5 py-4 text-center"
            >
              Sign In
            </button>

             <!-- Google Sign-in Button -->
            <button
              type="button"
               @click="handleGoogleLogin"
              class="flex items-center justify-center gap-2 mt-2 font-neue-montreal bg-[#F1F1F1] w-full text-black font-medium rounded-lg text-base px-5 py-4 text-center"
            >
            <svg class="w-5 h-5" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
              <path fill="#4285F4" d="M533.5 278.4c0-18.4-1.5-36.1-4.3-53.3H272v101h146.9c-6.3 34.2-25.1 63.3-53.6 82.7v68.4h86.7c50.8-46.8 81.5-115.7 81.5-198.8z"/>
              <path fill="#34A853" d="M272 544.3c72.6 0 133.6-24 178.1-65.4l-86.7-68.4c-24 16.1-54.7 25.6-91.4 25.6-70.2 0-129.7-47.4-151-111.1H32.5v69.8C77.3 475.2 167.9 544.3 272 544.3z"/>
              <path fill="#FBBC05" d="M121 324.9c-10.5-31-10.5-64.2 0-95.2V160H32.5c-42.3 83.8-42.3 181.6 0 265.4l88.5-69.8z"/>
              <path fill="#EA4335" d="M272 107.6c39.5-.6 77.6 13.8 106.6 40.2l79.6-79.6C405.5 23.3 344.7-.1 272 0 167.9 0 77.3 69 32.5 160l88.5 69.8C142.3 155 201.8 107.6 272 107.6z"/>
            </svg>
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { auth, GoogleAuthProvider, signInWithPopup } from "~/src/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const email = ref("");
const password = ref("");
const showPassword = ref(false);

const router = useRouter();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    await signInWithEmailAndPassword(auth, email.value, password.value);
    router.push("/adminProjects");
  } catch (error) {
    console.error("Login failed:", error.message);
    alert(error.message);
  }
};

// Google Login Handler
const handleGoogleLogin = async () => {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Google sign-in successful:', user);
    router.push("/adminProjects");
  } catch (error) {
    console.error('Google login error:', error.message);
    alert('Google login failed: ' + error.message);
  }
};

</script>

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
