import { GoogleGenAI } from '@google/genai'; 
import collegeData from './dataset.json'; // Data imported from JSON file

// --- 1. CONFIGURATION ---

// IMPORTANT: Replace these with your actual Gemini API Keys
const GEMINI_API_KEYS = [
    "Ajza567AsUoCwHh41OJsIa0tyM4TWggrlcny-Xa4", // Primary Key (Current)
    "AKzaSyAsUoCwHh41OJsIa0tWyM4TTffrljns-ye6",          // Fallback Key 1
    "DRzaSyJsUoC8wHh41OJuIa0tWyM8Tffrkjns-yf8"            // Fallback Key 2
];

const MODEL_NAME = "gemini-2.5-flash";

// --- 2. SYSTEM INSTRUCTION (Context Aware Prompt) ---

const SystemPrompt = `
आप एक अनुभवी AI सीनियर मेंटर हैं जिसका नाम ${collegeData.ai_senior_profile.name} है, और आप Medicaps University, CSE विभाग, बैच 2023 से हैं।
आपकी personality traits हैं: ${collegeData.ai_senior_profile.personality_traits.join(', ')}।
आपकी tone एक senior mentor जैसी, respectful और approachable है।

🛑 **CRITICAL INSTRUCTIONS:** 🛑
1. **Language & Style:** आपको हर जवाब **'आप'** का इस्तेमाल करके, **Hinglish** में देना है। Hinglish ka matlab hai **English Alphabets** mein likha hua Hindi text (jaise social media chats: "Placements kab start hote hain?" "Attendance 75% chahiye, warna dikkat ho jayegi.")।
2. **Length & Tone:** जवाब **short, concise, aur chat-friendly** hone chahiye (jaise haan, theek hai, okay, sure, etc. ka use karein). Lambe paragraphs avoid karein.

Aapka kaam sirf college-related questions ka answer karna hai. Jo bhi question poocha jaaye, uska answer keval aur keval neeche diye gaye college-sambandhi data ka upyog karke dein. Yadi koi jaankari available nahi hai, toh thoda saa context aware reply dena pls like u jo as a senior u should give.

Upyog karne ke liye college data:
${JSON.stringify(collegeData, null, 2)}
`;

// --- 3. CORE LOGIC FUNCTION ---

/**
 * Manages the multi-API key chat session with Gemini, including fallback logic.
 * @returns {object} Contains the sendMessage function and the currently active API key index.
 */
export function useGeminiChat() {
    let activeKeyIndex = 0; // Start with the primary key
    let chat = initializeChat(activeKeyIndex);

    /**
     * Initializes a new GoogleGenAI client and chat session.
     * @param {number} keyIndex The index of the API key to use.
     * @returns {object} The initialized Gemini chat session object.
     */
    function initializeChat(keyIndex) {
        const key = GEMINI_API_KEYS[keyIndex];
        // Note: For project presentation, show that the API key is being conditionally picked:
        console.log(`[INIT] Initializing chat with API Key Index: ${keyIndex} (Key: ${key.substring(0, 10)}...)`); 
        
        const ai = new GoogleGenAI({ apiKey: key });
        
        return ai.chats.create({
            model: MODEL_NAME,
            config: {
                systemInstruction: SystemPrompt, 
                temperature: 0.5,
            }
        });
    }

    /**
     * Sends a message, automatically switching keys on failure (Conditional Fallback).
     * @param {string} userMessage The user's input.
     * @returns {Promise<string>} The AI's response text.
     */
    async function sendMessage(userMessage) {
        let maxAttempts = GEMINI_API_KEYS.length;
        
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            // Conditional Rendering Logic: If attempt > 0, we are switching/falling back
            if (attempt > 0) {
                activeKeyIndex = (activeKeyIndex + 1) % GEMINI_API_KEYS.length;
                console.warn(`[FALLBACK] API Key failed. Switching to next key at index: ${activeKeyIndex}`);
                
                // Re-initialize the chat with the new key
                chat = initializeChat(activeKeyIndex);
            }

            try {
                // The main API call (Logic)
                const response = await chat.sendMessage({ message: userMessage }); 
                
                // Success, break the loop
                return response.text || "Sorry, I couldn't get a response.";
                
            } catch (error) {
                // Check if it's a known API error (e.g., quota exceeded, 429, 400)
                // For demonstration, we assume ANY error here triggers a fallback.
                console.error(`[ERROR] Attempt ${attempt + 1} failed with API Key Index ${activeKeyIndex}.`, error.message);
                
                if (attempt === maxAttempts - 1) {
                    // Last key failed
                    throw new Error("All configured API keys failed to return a response.");
                }
            }
        }
        // This should technically be unreachable, but good practice to handle.
        throw new Error("Failed to send message after all retries.");
    }
    
    // We expose the conditional status through this returned object
    return {
        sendMessage,
        getActiveKeyIndex: () => activeKeyIndex,
        getInitialMessage: () => collegeData.ai_senior_profile.intro_message,
    };
}
