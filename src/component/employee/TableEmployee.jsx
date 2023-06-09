import React from "react"
import ReactPaginate from "react-paginate"
import SearchEmployee from "./SearchEmployee"

const TableEmployee = (props) => {
  function toggleStatusEmployee(nik, status) {
    const data = {
      nik,
      status,
    }

    props.updateStatusEmployeeByNik(data)
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
        <SearchEmployee changeData={props.changeData} />
      </div>
      <div className='w-full overflow-hidden rounded-lg shadow-xs border'>
        <div className='w-full overflow-auto'>
          <table className='w-full table-auto whitespace-no-wrap'>
            <thead>
              <tr className='text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800'>
                <th className='px-4 py-3'>NIK</th>
                <th className='px-4 py-3'>Name</th>
                <th className='px-4 py-3'>Position</th>
                <th className='px-4 py-3'>Division</th>
                <th className='px-4 py-3'>Status</th>
                <th className='px-4 py-3'>Number Phone</th>
                <th className='px-4 py-3'>Email Employee</th>
                <th className='px-4 py-3'>Email Personal</th>
                <th className='px-4 py-3'>Gender</th>
                <th className='px-4 py-3'>Blood</th>
                <th className='px-4 py-3'>Religion</th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y dark:divide-gray-700 dark:bg-gray-800'>
              {props.employees?.map((data) => (
                <tr className='text-gray-700 dark:text-gray-400' key={data.nik}>
                  <td className='px-2 py-3 text-sm capitalize'>{data.nik}</td>
                  <td className='px-2 py-3 text-sm'>
                    <button
                      className='text-primary border-b-2 border-primary capitalize'
                      onClick={() => props.getEmployeeByNik(data.nik)}>
                      {data.name}
                    </button>
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.position}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.division}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    <div className='relative flex flex-col group'>
                      <div>
                        <label className='inline-flex relative items-center mr-5 cursor-pointer'>
                          <input
                            type='checkbox'
                            className='sr-only peer'
                            checked={data.status_employee}
                            readOnly
                          />
                          <div
                            onClick={() => {
                              toggleStatusEmployee(
                                data.nik,
                                !data.status_employee
                              )
                            }}
                            className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                      </div>
                    </div>
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>{data.no_hp}</td>
                  <td className='px-2 py-3 text-sm'>{data.email_employee}</td>
                  <td className='px-2 py-3 text-sm'>{data.email_personal}</td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.gender}
                  </td>
                  <td className='px-2 py-3 text-sm capitalize'>{data.blood}</td>
                  <td className='px-2 py-3 text-sm capitalize'>
                    {data.religion}
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

export default TableEmployee
