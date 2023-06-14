import React from "react"
import GetDaysInMonth from "../../utils/GetDaysInMonth"
import { useState } from "react"
import { useEffect } from "react"
import FilterMonthReportAttendanceByMonth from "./FilterMonthReportAttendanceByMonth"

const TableReportAttendanceByMonth = (props) => {
  const [elementThDate, setElementThDate] = useState([])

  useEffect(() => {
    setElementThDate(renderDaysAttendance)
  }, [props.month?.month])

  const renderDaysAttendance = () => {
    const daysInMonth = GetDaysInMonth(props.month?.month, props.month?.year)
    const columns = []

    for (let i = 1; i <= daysInMonth; i++) {
      columns.push(i)
    }

    return columns
  }

  return (
    <div className='m-4'>
      <div className='flex flex-wrap justify-between items-center gap-4 mb-2'>
        <FilterMonthReportAttendanceByMonth changeData={props.changeData} />
      </div>
      <div className='w-full overflow-hidden rounded-lg shadow-xs border'>
        <div className='w-full overflow-auto'>
          <table className='w-full table-auto whitespace-no-wrap'>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                <th className='px-4 py-3 sticky left-0 bg-gray-50 dark:bg-gray-800'>
                  Name
                </th>
                {elementThDate.map((data) => (
                  <th className='px-4 py-3' key={data}>
                    {data}
                  </th>
                ))}
                <th className='px-4 py-3'>Total</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
              {props.attendances?.map((data, index) => (
                <tr className='text-gray-700 dark:text-gray-400' key={index}>
                  <td className='px-2 py-3 text-sm capitalize sticky left-0 bg-white dark:bg-gray-800'>
                    {data.name}
                  </td>
                  {Object.keys(data.attendance).map((day) => (
                    <td className='px-2 py-3 text-sm text-center' key={day}>
                      {data.attendance[day]}
                    </td>
                  ))}
                  <td className='px-2 py-3 text-sm text-center'>
                    {data.totalAttendance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default TableReportAttendanceByMonth
