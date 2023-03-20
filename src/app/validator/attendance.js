const ValidatorAttendance = {
    validateRangeDateAttendance(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.startDate && data.endDate) {
            formIsValid = false;
            errors["startDate"] = "Start date is required"
        }

        if (data.startDate && !data.endDate) {
            formIsValid = false;
            errors["endDate"] = "End date is required"
        }

        if (data.startDate && data.endDate) {
            const countStartDate = new Date(data.startDate).getTime();
            const countEndDate = new Date(data.endDate).getTime();
            if (countStartDate > countEndDate) {
                formIsValid = false;
                errors["endDate"] = "End date cannot be less than start date"
            };
        }

        return {
            formIsValid,
            errors,
        }
    }
}

export default ValidatorAttendance;