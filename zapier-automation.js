import axios from "axios";

const zapierWebhookUrl =
  "https://hooks.zapier.com/hooks/catch/21085157/28h65n2/";

// Define the function
async function sendTopRatedToZapier(payload) {
  try {
    const response = await axios.post(zapierWebhookUrl, payload);

    console.log(`Sent to Zapier:`, payload, `Response:`, response.data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

export default sendTopRatedToZapier;
