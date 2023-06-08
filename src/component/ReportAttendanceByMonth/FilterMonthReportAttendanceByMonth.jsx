import React from "react"
import { useState } from "react"

const FilterMonthReportAttendanceByMonth = (props) => {
  const [monthAndYear, setMonthAndYear] = useState("")

  function submitFormSearch(e) {
    e.preventDefault()

    const { month, year } = getMonthAndYear(monthAndYear)

    props.changeData("month", { month, year })
  }

  function getMonthAndYear(data) {
    const dateArray = data.split("-")
    const month = dateArray[dateArray.length - 1]
    const year = dateArray[0]
    return {
      month: parseInt(month),
      year: parseInt(year),
    }
  }

  function resetFilterDate() {
    setMonthAndYear("")
    const data = { month: null, year: null }
    props.changeData("month", data)
  }

  return (
    <div className='flex flex-wrap justify-between items-center mt-4 mb-2 gap-4 text-sm'>
      <form
        onSubmit={(e) => submitFormSearch(e)}
        className='flex items-center flex-wrap gap-2 border rounded-lg shadow-md p-4'>
        <div>
          <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
            Month
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:text-gray-300`}
            type='month'
            placeholder='search name user'
            value={monthAndYear}
            onChange={(e) => setMonthAndYear(e.target.value)}
          />
        </div>
        <button
          type='submit'
          className='self-end text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
          Seach
        </button>
        <button
          type='button'
          onClick={resetFilterDate}
          className='self-end px-5 py-2.5 text-sm font-medium leading-5 text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 sm:px-4 sm:w-auto active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray'>
          Reset
        </button>
      </form>
    </div>
  )
}

export default FilterMonthReportAttendanceByMonth
