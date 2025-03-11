const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function getExercise(language, hintLang) {
    const response = await fetch(`${API_URL}/questions/get/?language=En&hintLang=PL`);
    const result = await response.json();
    return {response, result}
}

export {getExercise};
