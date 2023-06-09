import CONFIG from "./CONFIG";

const API_ENDPOINT = {
    AUTHENTICATION: `${CONFIG.BASE_URL}/authentication`,
    USER: `${CONFIG.BASE_URL}/employee/user`,
    ATTENDANCE: `${CONFIG.BASE_URL}/attendance`,
    PERMISSIONS: `${CONFIG.BASE_URL}/permission`,
    EMPLOYEE: `${CONFIG.BASE_URL}/employee`
};

export default API_ENDPOINT;