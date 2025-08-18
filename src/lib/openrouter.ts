export const fetchGoogleGemma = async (userMessage: string, pdfText: string) => {
    const API_KEY = process.env.OPENROUTER_API_KEY;
    const API_URL = "https://openrouter.ai/api/v1/chat/completions";
  
    try {
      let prompt = userMessage;
      if (pdfText) {
        prompt = `Based on the following PDF content:\n\n${pdfText}\n\nAnswer the following question:\n${userMessage}`;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemma-3-4b-it:free",
          messages: [
            { role: "system", content: "You are a helpful AI assistant specialized in analyzing and answering questions about PDF documents. You will be provided with the text content of a PDF file and a user's question. Your task is to answer the user's question based on the provided PDF content." },
            { role: "user", content: prompt }
          ],
        }),
      });
  
      if (!response.ok) {
        // Log the response details to understand the error
        const errorText = await response.text();
        console.error("API Response Error:", errorText);
        throw new Error(`API Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.choices?.[0]?.message?.content || "No response received.";
    } catch (error) {
      console.error("OpenRouter API Error:", error);
      return "Error fetching response.";
    }
  };
  