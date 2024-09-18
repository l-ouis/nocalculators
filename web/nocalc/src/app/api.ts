const API_URL = 'http://localhost:5000';

interface QuestionResponse {
    question: string;
    answer: number;
}

export const fetchData = async (endpoint: string): Promise<QuestionResponse> => {
    try {
        const response = await fetch(`${API_URL}/${endpoint}`);
        console.log(response);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// fetchData('api/question')
//     .then(data => {
//         console.log('Data received:', data);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });