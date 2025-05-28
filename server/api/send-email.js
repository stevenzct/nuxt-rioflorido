export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const config = useRuntimeConfig();

  // Prepare EmailJS REST API payload
  const payload = {
    service_id: config.emailjsServiceId,
    template_id: config.emailjsTemplateId,
    user_id: config.emailjsUserId,
    template_params: body,
  };

  try {
    // Log the payload for debugging
    console.log('EmailJS payload:', JSON.stringify(payload, null, 2));
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    const result = await response.text();
    if (!response.ok) {
      console.error('EmailJS error:', result);
      throw new Error(result);
    }
    console.log('EmailJS success:', result);
    return { success: true, result };
  } catch (error) {
    console.error('EmailJS exception:', error);
    return { success: false, error: error.message };
  }
});