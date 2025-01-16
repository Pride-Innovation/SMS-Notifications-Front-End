import axios from "axios";

export const baseURL = "http://172.16.13.175/sms/"
// export const baseURL = "http://127.0.0.1:8000/sms/"

export const sendSMSNotificationService = async (data: object) => {
    try {
        const response = await axios.post(baseURL, data);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}