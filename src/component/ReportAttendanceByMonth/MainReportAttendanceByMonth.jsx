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
  const [month, setMonth] = useState({})

  useEffect(() => {
    getAttendanceDayByMonth()
  }, [])

  function changeData(data, value) {
    switch (data) {
      case "month":
        setMonth(value)
        getAttendanceDayByMonth(value)
        break
      default:
        console.log("change data is not defined")
    }
  }

  async function getAttendanceDayByMonth(month) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await attendanceService.getAttendanceDayByMonth({
      accessToken,
      month: month?.month || "",
      year: month?.year || "",
    })

    if (result.status === "success") {
      setAttendances(result.data.attendances)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function getExportAttendanceDayByMonthExcel() {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await attendanceService.getExportAttendanceDayByMonthExcel({
      accessToken,
      month: month?.month || "",
      year: month?.year || "",
    })

    if (result.status === "success") {
      const linkExcel = result.data.link
      window.open(linkExcel, "_blank")
    } else {
      if (result.response) {
        if (result.response.data) {
          ToastNotify("error", result.response.data.message)
        }
      } else {
        ToastNotify("error", "Internal server error/Your computer offline")
      }
    }

    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableReportAttendanceByMonth
          attendances={attendances}
          month={month}
          changeData={changeData}
          getExportAttendanceDayByMonthExcel={
            getExportAttendanceDayByMonthExcel
          }
        />
      </div>
    </main>
  )
}

export default MainReportAttendanceByMonth
