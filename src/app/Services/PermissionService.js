import axios from "axios";
import API_ENDPOINT from "../Config/API_ENDPOINT";

class PermissionService {
    constructor() {
        this._axios = axios;
        this._endpoint = API_ENDPOINT.PERMISSIONS;
    }

    queryGetPermission({ name, statusApproval, startDateFilter, endDateFilter }) {
        let query = '';

        if (name) query += `&name=${name}`;
        if (statusApproval) query += `&statusApproval=${statusApproval}`;
        if (startDateFilter) query += `&startDateFilter=${startDateFilter}`;
        if (endDateFilter) query += `&endDateFilter=${endDateFilter}`;

        return query;
    }

    async getPermissions(payload) {
        try {
            let query = this.queryGetPermission(payload);
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/admin?limit=${payload.limit}&page=${payload.page}${query}`,
                headers: {
                    'Authorization': `Bearer ${payload.accessToken}`
                }
            });

            return response.data;
        } catch (error) {
            return error;
        }
    }

    async getPermissionById(payload) {
        try {
            const response = await this._axios({
                method: 'GET',
                url: `${this._endpoint}/${payload.idPermission}`,
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

export default PermissionService;