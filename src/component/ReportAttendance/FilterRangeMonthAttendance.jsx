import React, { useState } from "react"
import ValidatorAttendance from "../../app/validator/attendance"

const FilterRangeMonthAttendance = (props) => {
  // filter month
  const [errors, setErrors] = useState({})
  const [startMonth, setStartMonth] = useState("")
  const [endMonth, setEndMonth] = useState("")

  function submitFormSearch(e) {
    e.preventDefault()
    setErrors({})

    const data = { startMonth, endMonth }
    const { errors: errorValidate, formIsValid } =
      ValidatorAttendance.validateRangeMonthAttendance(data)

    if (!formIsValid) {
      setErrors(errorValidate)
      return false
    }

    const result = {
      startMonth: getMonth(startMonth),
      endMonth: getMonth(endMonth),
    }

    props.changeData("filterMonth", result)
  }

  function getMonth(data) {
    const dateArray = data.split("-")
    const month = dateArray[dateArray.length - 1]
    return parseInt(month)
  }

  function resetFilterDate() {
    setErrors({})
    setStartMonth("")
    setEndMonth("")
    const data = { startMonth: "", endMonth: "" }
    props.changeData("filterMonth", data)
  }

  return (
    <div className='flex flex-wrap justify-between items-center mt-4 mb-2 gap-4 text-sm'>
      <form
        onSubmit={(e) => submitFormSearch(e)}
        className='flex items-center flex-wrap gap-2 border rounded-lg shadow-md p-4'>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
            Start Month
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.startMonth ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
            type='month'
            placeholder='search name user'
            value={startMonth}
            onChange={(e) => setStartMonth(e.target.value)}
          />
          <div className={`text-error ${errors.startMonth ? "" : "md:mb-5"}`}>
            {errors.startMonth}
          </div>
        </div>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
            Till Month
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.endMonth ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
            type='month'
            placeholder='search name user'
            value={endMonth}
            onChange={(e) => setEndMonth(e.target.value)}
          />
          <div className={`text-error ${errors.endMonth ? "" : "md:mb-5"}`}>
            {errors.endMonth}
          </div>
        </div>
        <button
          type='submit'
          className='self-end md:mb-5 text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
          Seach
        </button>
        <button
          type='button'
          onClick={resetFilterDate}
          className='self-end md:mb-5 px-5 py-2.5 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'>
          Reset
        </button>
      </form>
    </div>
  )
}

export default FilterRangeMonthAttendance
