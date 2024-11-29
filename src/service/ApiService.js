import axios from "axios";

const apiKey = import.meta.env.VITE_HUGGINGFACE_API_KEY;

export const analyzeNews = async (text) => {
  try {
    const response = await axios.post(
      "https://api-inference.huggingface.co/models/roberta-base-openai-detector",
      { inputs: text },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error analyzing news:", error);
    return { error: "Could not analyze news. Please try again later." };
  }
};
