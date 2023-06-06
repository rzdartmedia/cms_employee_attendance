import React from "react"
import { useState } from "react"
import DataAttendanceAllBar from "./DataAttendanceAllBar"
import LoadingSpinner from "../template/LoadingSpinner"
import AttendanceService from "../../app/Services/AttendanceService"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import AuthApi from "../../AuthApi"
import Cookies from "js-cookie"
import { useEffect } from "react"
import FilterRangeMonthAttendance from "./FilterRangeMonthAttendance"
import TableReportAttendance from "./TableReportAttendance"
import SelectStatusReportAttendanceIn from "./SelectStatusReportAttendanceIn"
import { ImSearch } from "react-icons/im"

const MainReportAttendance = () => {
  const Auth = React.useContext(AuthApi)
  const attendanceServices = new AttendanceService()

  const [attendances, setAttendances] = useState([])
  const [summaryAttendances, setSummaryAttendances] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [startMonth, setStartMonth] = useState("")
  const [endMonth, setEndMonth] = useState("")
  const [statusAttendanceIn, setStatusAttendanceIn] = useState("")
  const [search, setSearch] = useState("")
  const [timeoutId, setTimeoutId] = useState(null)

  // Loading
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getAttendances({
      startMonth: "",
      endMonth: "",
      statusAttendanceIn: "",
      searchName: "",
    })

    getAttendancesForTable({
      page,
      dataLimit: limit,
      startMonth: "",
      endMonth: "",
      statusAttendanceIn: "",
      searchName: "",
    })
  }, [])

  async function getAttendances(data) {
    setIsLoading(true)
    try {
      const accessToken = await RefreshTokenService()
      if (accessToken === "fail") {
        Auth.setAuth(false)
        Cookies.remove("refreshToken")
        Cookies.remove("user")
      }

      const result = await attendanceServices.getAllAttendanceByMonth({
        accessToken,
        startMonth: data.startMonth || "",
        endMonth: data.endMonth || "",
        statusAttendanceIn: data.statusAttendanceIn || "",
        search: data.searchName || "",
      })

      if (result.status === "success") {
        const dataResult = result.data.attendances
        setAttendances(dataResult)
      }

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  async function getAttendancesForTable(data) {
    setIsLoading(true)
    try {
      const accessToken = await RefreshTokenService()
      if (accessToken === "fail") {
        Auth.setAuth(false)
        Cookies.remove("refreshToken")
        Cookies.remove("user")
      }

      const result = await attendanceServices.getAllAttendanceByMonthForTable({
        accessToken,
        page,
        limit: data.dataLimit,
        startMonth: data.startMonth || "",
        endMonth: data.endMonth || "",
        statusAttendanceIn: data.statusAttendanceIn || "",
        search: data.searchName || "",
      })

      if (result.status === "success") {
        const dataResult = result.data.attendances
        setSummaryAttendances(dataResult)
        setTotalData(result.totalData)
        setTotalPages(result.totalPages)
      }

      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getAttendancesForTable({
      page: selected + 1,
      dataLimit: limit,
      startMonth: startMonth,
      endMonth: endMonth,
      statusAttendanceIn: statusAttendanceIn,
      searchName: search,
    })
  }

  function changeData(data, value) {
    switch (data) {
      case "filterMonth":
        setPage(1)
        setStartMonth(value.startMonth)
        setEndMonth(value.endMonth)

        getAttendances({
          startMonth: value.startMonth,
          endMonth: value.endMonth,
          statusAttendanceIn: statusAttendanceIn,
          searchName: search,
        })

        getAttendancesForTable({
          page: 1,
          dataLimit: limit,
          startMonth: value.startMonth,
          endMonth: value.endMonth,
          statusAttendanceIn: statusAttendanceIn,
          searchName: search,
        })
        break

      case "statusAttendanceIn":
        setPage(1)
        setStatusAttendanceIn(value)

        getAttendances({
          startMonth: startMonth,
          endMonth: endMonth,
          statusAttendanceIn: value,
          searchName: search,
        })

        getAttendancesForTable({
          page: 1,
          dataLimit: limit,
          startMonth: startMonth,
          endMonth: endMonth,
          statusAttendanceIn: value,
          searchName: search,
        })
        break

      case "searchByName":
        setPage(1)

        getAttendances({
          startMonth: startMonth,
          endMonth: endMonth,
          statusAttendanceIn: statusAttendanceIn,
          searchName: value,
        })

        getAttendancesForTable({
          page: 1,
          dataLimit: limit,
          startMonth: startMonth,
          endMonth: endMonth,
          statusAttendanceIn: statusAttendanceIn,
          searchName: value,
        })
        break

      default:
        console.log("mantab")
    }
  }

  function searchData(value) {
    setSearch(value)

    clearTimeout(timeoutId)
    const newTimeoutId = setTimeout(() => {
      changeData("searchByName", value)
    }, 800)
    setTimeoutId(newTimeoutId)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <div className='m-4'>
          <div className='flex flex-col lg:flex-row justify-between items-center'>
            <FilterRangeMonthAttendance changeData={changeData} />
            <SelectStatusReportAttendanceIn changeData={changeData} />
            {/* Search */}
            <div className='text-sm 2xl:text-base w-max items-center p-[5px] shadow-md border rounded-[8px] my-2 lg:my-0'>
              <ImSearch className='w-[18px] inline-block' />
              <input
                className='ml-[5px] items-center border-0 focus:outline-0 px-2 py-1 text-gray-700 dark:text-white dark:bg-gray-800 border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500'
                value={search}
                onChange={(e) => searchData(e.target.value)}
                type='search'
                placeholder='search name'
              />
            </div>
            {/* Search End */}
          </div>
          <div className='grid grid-cols-1 mt-4'>
            <div className='bg-white rounded-lg shadow-md w-full h-[60vh] overflow-x-auto'>
              <DataAttendanceAllBar attendances={attendances} />
            </div>
          </div>
        </div>
        <TableReportAttendance
          summaryAttendances={summaryAttendances}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          limit={limit}
          changeData={changeData}
        />
      </div>
    </main>
  )
}

export default MainReportAttendance
