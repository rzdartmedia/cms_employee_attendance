import {
    toast
} from "react-toastify";

function ToastNotify(type, message) {
    toast(message, {
        type,
        theme: 'colored',
        position: toast.POSITION.TOP_CENTER
    })
}

export default ToastNotify