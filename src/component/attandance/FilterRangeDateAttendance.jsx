import React, { useState } from "react"
import ValidatorAttendance from "../../app/validator/attendance"

const FilterRangeDateAttendance = (props) => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [errors, setErrors] = useState({})

  function submitFormSearch(e) {
    e.preventDefault()
    setErrors({})

    const data = { startDate, endDate }
    const { errors: errorValidate, formIsValid } =
      ValidatorAttendance.validateRangeDateAttendance(data)

    if (!formIsValid) {
      setErrors(errorValidate)
      return false
    }

    props.changeData("filterDate", data)
  }

  function resetFilterDate() {
    setStartDate("")
    setEndDate("")
    const data = { startDate: "", endDate: "" }
    props.changeData("filterDate", data)
  }

  return (
    <div className='flex flex-wrap justify-between items-center mt-4 mb-2 gap-4 text-sm'>
      <form
        onSubmit={(e) => submitFormSearch(e)}
        className='flex items-center flex-wrap gap-2 border rounded-lg shadow-xs p-4'>
        <div>
          <label
            className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
            htmlFor='startDateFilterAttendance'>
            Start Date
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.startDate ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
            id='startDateFilterAttendance'
            type='date'
            placeholder='search name user'
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <div className={`text-error ${errors.startDate ? "" : "md:mb-5"}`}>
            {errors.startDate}
          </div>
        </div>
        <div>
          <label
            className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'
            htmlFor='endDateFilterAttendance'>
            Till Date
          </label>
          <input
            className={`shadow appearance-none border ${
              errors.endDate ? "border-red-500" : ""
            } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
            id='endDateFilterAttendance'
            type='date'
            placeholder='search name user'
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <div className={`text-error ${errors.endDate ? "" : "md:mb-5"}`}>
            {errors.endDate}
          </div>
        </div>
        <button
          type='submit'
          className='self-end md:mb-5 text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
          Search
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

export default FilterRangeDateAttendance
