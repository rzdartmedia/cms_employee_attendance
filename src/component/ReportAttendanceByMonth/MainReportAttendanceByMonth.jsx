import React from "react"
import LoadingSpinner from "../template/LoadingSpinner"
import AuthApi from "../../AuthApi"
import { useState } from "react"
import AttendanceService from "../../app/Services/AttendanceService"
import TableReportAttendanceByMonth from "./TableReportAttendanceByMonth"
import { useEffect } from "react"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import Cookies from "js-cookie"
import ToastNotify from "../../utils/ToastNotify"

const MainReportAttendanceByMonth = () => {
  const Auth = React.useContext(AuthApi)
  const attendanceService = new AttendanceService()
  const [isLoading, setIsLoading] = useState(false)

  const [attendances, setAttendances] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [month, setMonth] = useState({})

  useEffect(() => {
    getAttendanceDayByMonth({ page, dataLimit: limit })
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getAttendanceDayByMonth({
      page: selected + 1,
      dataLimit: limit,
      month: month,
    })
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value)
        getAttendanceDayByMonth({
          page: 1,
          dataLimit: value,
          month: month,
        })
        break
      case "month":
        setPage(1)
        setMonth(value)
        getAttendanceDayByMonth({
          page: 1,
          dataLimit: limit,
          month: value,
        })
        break
      default:
        console.log("change data is not defined")
    }
  }

  async function getAttendanceDayByMonth({ page, dataLimit, month }) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await attendanceService.getAttendanceDayByMonth({
      accessToken,
      page,
      limit: dataLimit,
      month: month?.month,
      year: month?.year,
    })

    if (result.status === "success") {
      setAttendances(result.data.attendances)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableReportAttendanceByMonth
          attendances={attendances}
          page={page}
          totalData={totalData}
          totalPages={totalPages}
          limit={limit}
          month={month}
          changePage={changePage}
          changeData={changeData}
        />
      </div>
    </main>
  )
}

export default MainReportAttendanceByMonth
