const ValidatorProfile = {
    validateUpdatePassword(data) {
        let errors = {};
        let formIsValid = true;
        const regexNewPassword = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_])(?=.*[a-zA-Z]).{8,}$/;

        if (!data.passwordOld) {
            formIsValid = false;
            errors["passwordOld"] = "Please enter the password old";
        }

        if (!data.passwordNew) {
            formIsValid = false;
            errors["passwordNew"] = "Please enter the password new";
        }

        if (data.passwordNew) {
            if (!regexNewPassword.test(data.passwordNew)) {
                formIsValid = false;
                errors["passwordNew"] =
                    "Invalid password, at least 8 characters, contains uppercase letters, numbers, and special characters";
            }
        }

        if (!data.confirmPassword) {
            formIsValid = false;
            errors["confirmPassword"] = "Please enter the confirm password";
        }

        if (data.confirmPassword) {
            if (data.passwordNew !== data.confirmPassword) {
                formIsValid = false;
                errors["confirmPassword"] = "Confirm password does not match";
            }
        }

        return { errors, formIsValid };
    },
};

export default ValidatorProfile;
