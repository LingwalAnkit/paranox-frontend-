export async function fetchTranslations(language: string) {
    const response = await fetch(`/translations/${language}.json`);
    if (!response.ok) {
      throw new Error("Failed to fetch translations");
    }
    return response.json();
  }
  