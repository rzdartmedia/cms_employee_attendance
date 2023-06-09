const ValidatorAuthentication = {
    validatePostAuthentication(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.noHp) {
            formIsValid = false;
            errors["noHp"] = "Please enter the number phone";
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