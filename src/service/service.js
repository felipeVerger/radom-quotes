const base_url = "https://api.adviceslip.com/advice/";

// GET RANDOM QUOTES
export const getRandomQuotes = async (id) => {
    try {
        const response = await fetch(`https://api.adviceslip.com/advice/${id}`);
        const data = await response.json();
        return data.slip;
    } catch (error) {
        console.log(error);
    }
}