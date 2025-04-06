export async function extractTextFromImage(base64: string, apiKey: string) {
    const body = {
      requests: [
        {
          image: { content: base64 },
          features: [{ type: 'TEXT_DETECTION' }],
        },
      ],
    };
    const res = await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const json = await res.json();
    return json.responses[0].fullTextAnnotation?.text || '';
  }