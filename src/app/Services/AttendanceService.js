import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class AttendanceService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.ATTENDANCE;
    }

    queryGetAttendance({ name, statusAttendanceIn, startDateFilter, endDateFilter }) {
        let query = '';

        if (name) query += `&name=${name}`;
        if (statusAttendanceIn) query += `&statusAttendanceIn=${statusAttendanceIn}`;
        if (startDateFilter) query += `&startDateFilter=${startDateFilter}`;
        if (endDateFilter) query += `&endDateFilter=${endDateFilter}`;

        return query;
    }

    async getAttendances(payload) {
        try {
            let query = this.queryGetAttendance(payload);
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}?limit=${payload.limit}&page=${payload.page}${query}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getAttendanceById(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/cms/${payload.idAttendance}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

}

export default AttendanceService;