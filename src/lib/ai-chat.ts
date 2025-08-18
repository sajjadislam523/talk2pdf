import { fetchGoogleGemma } from "@/lib/openrouter";

export const getAIResponse = async (userPrompt: string, pdfText: string) => {
  try {
    const response = await fetchGoogleGemma(userPrompt, pdfText);
    return response; // Return the AI's answer
  } catch (error) {
    console.error("AI Fetch Error:", error);
    throw new Error("Failed to fetch AI response.");
  }
};
