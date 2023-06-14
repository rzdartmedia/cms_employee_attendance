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

    async getAllAttendanceByMonth(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/cms/all/month?startMonth=${payload.startMonth}&endMonth=${payload.endMonth}&statusAttendanceIn=${payload.statusAttendanceIn}&search=${payload.search}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getAllAttendanceByMonthForTable(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/cms/all/month/table?page=${payload.page}&limit=${payload.limit}&startMonth=${payload.startMonth}&endMonth=${payload.endMonth}&statusAttendanceIn=${payload.statusAttendanceIn}&search=${payload.search}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getAttendanceDayByMonth(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/cms/day-by-month?page=${payload.page}&limit=${payload.limit}&month=${payload.month}&year=${payload.year}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getExportAttendanceDayByMonthExcel(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/cms/day-by-month/excel?month=${payload.month}&year=${payload.year}`,
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