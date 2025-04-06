export function generateEHR(text: string): { diagnosis: string; timestamp: string } {
    return {
      diagnosis: `Based on symptoms: ${text}`,
      timestamp: new Date().toISOString(),
    };
  }