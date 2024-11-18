import BaguetteBox from 'baguettebox.js';
import 'baguettebox.js/dist/baguetteBox.min.css';

export default defineNuxtPlugin(nuxtApp => {
  // Initialize BaguetteBox once the page is rendered
  nuxtApp.hook('page:finish', () => {
    // Target gallery class for BaguetteBox to initialize
    BaguetteBox.run('.gallery');
  });
});
