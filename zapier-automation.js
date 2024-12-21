import axios from "axios";

const zapierWebhookUrl = "";

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
