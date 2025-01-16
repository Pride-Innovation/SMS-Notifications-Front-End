import axios from "axios"
import { baseURL } from "../../utills/service"

export const fetchLogsService = async (
    start: string,
    end: string,
    pageSize: number,
    page: number
) => {
    try {
        const response = await axios.get(`${baseURL}logs/?start_date=${start}&end_date=${end}&page_size=${pageSize}&page=${page}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}