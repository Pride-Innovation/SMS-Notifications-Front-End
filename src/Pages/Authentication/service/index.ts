import axiosInstance from "../../../core/axios"

const usersAPIs = "authentication/users"

const loginService = async (body: Object) => {
    try {
        const response = await axiosInstance.post("login/", body);
        return response?.data;
    } catch (error) {
        throw error;
    }
}

const findUserByIdService = async (id: string | number) => {
    try {
        const response = await axiosInstance.get(`${usersAPIs}/${id}`)
        return response.data;
    } catch (error) {
        throw error;
    }
}

export {
    loginService,
    findUserByIdService
}