import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";
import CONFIG from "../Config/CONFIG";

class UserService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.USER;
    }

    async getUserById(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async updateDataProfile(payload) {
        try {
            const data = JSON.stringify({
                "name": payload.data.name,
                "position": payload.data.position,
                "division": payload.data.division,
                "gender": payload.data.gender,
                "placeOfBirth": payload.data.placeOfBirth,
                "dateOfBirth": payload.data.dateOfBirth,
                "addressKtp": payload.data.addressKtp,
                "address": payload.data.address,
                "religion": payload.data.religion,
                "emailPersonal": payload.data.emailPersonal,
                "emailEmployee": payload.data.emailEmployee,
                "ptkp": payload.data.ptkp,
                "blood": payload.data.blood,
                "nameFamily": payload.data.nameFamily,
                "connectionFamily": payload.data.connectionFamily,
                "noHpFamily": payload.data.noHpFamily,
                "addressFamily": payload.data.addressFamily,
                "workLocation": payload.data.workLocation
            });

            const response = await this._axios({
                method: 'PUT',
                url: `${this._endpoint}`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${payload.accessToken}`
                },
                data: data,
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async changePasswordUser(payload) {
        try {
            const data = JSON.stringify({
                "passwordOld": payload.passwordOld,
                "passwordNew": payload.passwordNew
            });

            const response = await this._axios({
                method: 'PUT',
                url: `${CONFIG.BASE_URL}/user/password`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${payload.accessToken}`
                },
                data: data,
            });

            return response.data;
        } catch (error) {
            return error.response.data;
        }
    }
}

export default UserService;