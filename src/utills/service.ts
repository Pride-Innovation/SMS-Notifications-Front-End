import axios from "axios";

// export const baseURL = "http://172.16.13.175/sms/"
export const baseURL = "http://localhost:8001/sms/"

export const sendSMSNotificationService = async (data: object) => {
    try {
        console.log(data, "request data")
        const response = await axios.post(baseURL, data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}