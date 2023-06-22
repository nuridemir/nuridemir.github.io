import axios from "axios";

export const fetchAllData = async (url) => {
    const apiUrl = `${import.meta.env.VITE_APP_API_URL}/${url}`;
    const response = await axios({
        method: 'get',
        url: apiUrl
    })
    if (response.status === 200)
        return response.data
    else
        response.message
}