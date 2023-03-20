import axios from "axios";
import Cookies from "js-cookie";
import API_ENDPOINT from "../Config/API_ENDPOINT";

async function RefreshTokenService() {
    try {

        const refreshToken = Cookies.get("refreshToken")
        const data = JSON.stringify({
            refreshToken
        });

        const response = await axios({
            method: 'PUT',
            url: `${API_ENDPOINT.AUTHENTICATION}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data,
        });

        const result = response.data;
        if (result.status === 'success') {
            return result.data.accessToken
        } else {
            return 'fail';
        }
    } catch (error) {
        return 'fail'
    }
}

export default RefreshTokenService