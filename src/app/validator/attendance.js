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
    },

    validateRangeMonthAttendance(data) {
        let errors = {};
        let formIsValid = true;

        if (!data.startMonth) {
            formIsValid = false;
            errors["startMonth"] = "Start month is required"
        }

        if (!data.endMonth) {
            formIsValid = false;
            errors["endMonth"] = "End month is required"
        }

        if (data.startMonth && data.endMonth) {
            const countStartMonth = new Date(data.startMonth).getTime();
            const countEndMonth = new Date(data.endMonth).getTime();
            if (countStartMonth > countEndMonth) {
                formIsValid = false;
                errors["endMonth"] = "End month can not be smaller"
            };
        }

        return {
            formIsValid,
            errors,
        }
    }
}

export default ValidatorAttendance;