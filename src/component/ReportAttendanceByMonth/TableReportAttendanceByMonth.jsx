import React from "react"
import ReactPaginate from "react-paginate"
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
        <label htmlFor='limitLogTracker'>
          <select
            id='limitLogTracker'
            className='block w-full form-select rounded-lg shadow-xs border p-2'
            value={props.limit}
            onChange={(e) => props.changeData("limit", e.target.value)}>
            <option value='15'>15</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
          </select>
        </label>
        <FilterMonthReportAttendanceByMonth changeData={props.changeData} />
      </div>
      <div className='w-full overflow-hidden rounded-lg shadow-xs border'>
        <div className='w-full overflow-auto'>
          <table className='w-full table-auto whitespace-no-wrap'>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                <th className='px-4 py-3'>Name</th>
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
                  <td className='px-2 py-3 text-sm capitalize'>{data.name}</td>
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

      <div className='flex flex-wrap justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800'>
        <p className='flex items-center col-span-3'>
          Data Total : {props.totalData}
          <br /> Page : {props.page} Of {props.totalPages}
        </p>
        <nav
          key={props.totalData}
          role='navigation'
          className='col-span-4 mt-2 sm:mt-4 sm:justify-end'>
          <ReactPaginate
            className='flex flex-wrap justify-center gap-2 lg:gap-0'
            previousLabel={"<"}
            nextLabel={">"}
            forcePage={props.page - 1}
            pageCount={props.totalPages === 0 ? 1 : props.totalPages}
            onPageChange={props.changePage}
            containerClassName={"flex"}
            pageLinkClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white dark:text-gray-400 dark:bg-gray-700"
            }
            previousLinkClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            nextLinkClassName={
              " text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            breakClassName={
              "text-sm 2xl:text-base inline-flex items-center px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-primary hover:text-white"
            }
            activeLinkClassName={
              "active-paginate dark:text-white dark:bg-gray-700"
            }
            disabledLinkClassName={
              "disable-paginate hover:bg-gray-300 hover:text-gray-500"
            }
          />
        </nav>
      </div>
    </div>
  )
}

export default TableReportAttendanceByMonth
