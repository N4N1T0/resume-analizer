export const AIResponseFormat = `
    interface Feedback {
    overallScore: number; //max 100
    ATS: {
      score: number; //rate based on ATS suitability
      tips: {
        type: "good" | "improve";
        tip: string; //give 3-4 tips
      }[];
    };
    toneAndStyle: {
      score: number; //max 100
      tips: {
        type: "good" | "improve";
        tip: string; //make it a short "title" for the actual explanation
        explanation: string; //explain in detail here
      }[]; //give 3-4 tips
    };
    content: {
      score: number; //max 100
      tips: {
        type: "good" | "improve";
        tip: string; //make it a short "title" for the actual explanation
        explanation: string; //explain in detail here
      }[]; //give 3-4 tips
    };
    structure: {
      score: number; //max 100
      tips: {
        type: "good" | "improve";
        tip: string; //make it a short "title" for the actual explanation
        explanation: string; //explain in detail here
      }[]; //give 3-4 tips
    };
    skills: {
      score: number; //max 100
      tips: {
        type: "good" | "improve";
        tip: string; //make it a short "title" for the actual explanation
        explanation: string; //explain in detail here
      }[]; //give 3-4 tips
    };
  }`

export const prepareInstructions = ({
  jobTitle,
  jobDescription,
}: {
  jobTitle: string
  jobDescription: string
}) =>
  `Eres un experto en ATS (Sistema de Seguimiento de Candidatos) y análisis de currículums.
    Por favor analiza y califica este currículum y sugiere cómo mejorarlo.
    La calificación puede ser baja si el currículum es malo.
    Sé minucioso y detallado. No tengas miedo de señalar errores o áreas de mejora.
    Si hay mucho que mejorar, no dudes en dar puntuaciones bajas. Esto es para ayudar al usuario a mejorar su currículum.
    Si está disponible, usa la descripción del trabajo al que el usuario está aplicando para dar retroalimentación más detallada.
    Si se proporciona, toma en consideración la descripción del trabajo.
    El título del trabajo es: ${jobTitle}
    La descripción del trabajo es: ${jobDescription}
    Proporciona la retroalimentación usando el siguiente formato:
    ${AIResponseFormat}
    Devuelve el análisis como un objeto JSON, sin ningún otro texto y sin las comillas invertidas.
    No incluyas ningún otro texto o comentarios.`

export const prepareChatContext = (resumeData: Resume | undefined, inputValue: string) => `

        Contexto de Retroalimentación del Currículum:
      ${JSON.stringify(resumeData?.feedback, null, 2)}

        Detalles del Currículum:
        Empresa: ${resumeData?.companyName || 'N/A'}
        Título del Trabajo: ${resumeData?.jobTitle || 'N/A'}
        Descripción del Trabajo: ${resumeData?.jobDescription || 'N/A'}

        Pregunta del Usuario: ${inputValue}

        Por favor proporciona consejos útiles sobre la retroalimentación del currículum y sugerencias para mejorarlo. Mantén las respuestas concisas y accionables.`
