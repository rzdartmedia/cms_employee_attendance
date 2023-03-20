const ValidatorAuthentication = {
    validatePostAuthentication(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.nik) {
            formIsValid = false;
            errors["nik"] = "Please enter the nik";
        }

        if (!data.password) {
            formIsValid = false;
            errors["password"] = "Please enter the password";
        }

        return {
            errors,
            formIsValid
        };
    }
}

export default ValidatorAuthentication;