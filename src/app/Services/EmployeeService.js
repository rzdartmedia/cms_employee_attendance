import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class EmployeeService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.EMPLOYEE;
    }

    async getEmployees(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}?limit=${payload.limit}&page=${payload.page}&name=${payload.name}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getEmployeeByNik(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/${payload.nik}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async updateStatusEmployeeByNik(payload) {
        const data = JSON.stringify({
            status: payload.status,
        });

        const response = await this._axios({
            method: "PUT",
            url: `${this._endpoint}/${payload.nik}`,
            headers: {
                Authorization: `Bearer ${payload.accessToken}`,
                "Content-Type": "application/json",
            },
            data: data,
        });

        return response.data;
    }
}

export default EmployeeService