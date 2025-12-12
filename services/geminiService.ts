import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCustomArgument = async (customerName: string, reason: string): Promise<string> => {
  try {
    const prompt = `
      Você é um especialista em retenção de clientes para um jornal de grande circulação.
      
      Cliente: ${customerName || 'Cliente'}
      Motivo do cancelamento: ${reason}
      
      Gere um argumento curto, empático e persuasivo (máximo de 3 frases) para tentar reverter esse cancelamento.
      O tom deve ser profissional, porém acolhedor.
      Se o motivo for financeiro, foque em custo-benefício ou oferta.
      Se for falta de tempo, foque na curadoria de conteúdo.
      Se for insatisfação, foque em melhorias e canal direto.
      
      Retorne APENAS o texto do argumento, sem aspas ou introduções.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Não foi possível gerar um argumento no momento. Tente usar um dos argumentos padrão.";
  } catch (error) {
    console.error("Error generating argument:", error);
    return "Ocorreu um erro ao conectar com a IA. Por favor, tente novamente ou use os argumentos manuais.";
  }
};