import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import AttendanceService from "../../app/Services/AttendanceService"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import AuthApi from "../../AuthApi"
import ToastNotify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import ModalDetailAttendance from "./ModalDetailAttendance"
import TableAttendance from "./TableAttendance"

const MainAttandance = () => {
  const Auth = React.useContext(AuthApi)
  const attendanceService = new AttendanceService()
  const [isLoading, setIsLoading] = useState(false)
  const [attendances, setAttendances] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [searchName, setSearchName] = useState("")
  const [statusAttendanceIn, setStatusAttendanceIn] = useState("")
  const [startDateFilter, setstartDateFilter] = useState("")
  const [endDateFilter, setEndDateFilter] = useState("")

  // Modal detail
  const [modalDetail, setModalDetail] = useState(false)
  const [attendanceById, setAttendanceById] = useState({})

  useEffect(() => {
    getDataAttendances({ page, dataLimit: limit })
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getDataAttendances({
      page: selected + 1,
      dataLimit: limit,
      dataSearchName: searchName,
      dataStatusAttendanceIn: statusAttendanceIn,
      dataStartDateFilter: startDateFilter,
      dataEndDateFilter: endDateFilter,
    })
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value)
        getDataAttendances({
          page: 1,
          dataLimit: value,
          dataSearchName: searchName,
          dataStatusAttendanceIn: statusAttendanceIn,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      case "searchName":
        setPage(1)
        setSearchName(value)
        getDataAttendances({
          page: 1,
          dataLimit: limit,
          dataSearchName: value,
          dataStatusAttendanceIn: statusAttendanceIn,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      case "statusAttendanceIn":
        setPage(1)
        setStatusAttendanceIn(value)
        getDataAttendances({
          page: 1,
          dataLimit: limit,
          dataSearchName: searchName,
          dataStatusAttendanceIn: value,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      default:
        setPage(1)
        setstartDateFilter(value.startDate)
        setEndDateFilter(value.endDate)
        getDataAttendances({
          page: 1,
          dataLimit: limit,
          dataSearchName: searchName,
          dataStatusAttendanceIn: statusAttendanceIn,
          dataStartDateFilter: value.startDate,
          dataEndDateFilter: value.endDate,
        })
    }
  }

  async function getDataAttendances({
    page,
    dataLimit,
    dataSearchName,
    dataStatusAttendanceIn,
    dataStartDateFilter,
    dataEndDateFilter,
  }) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await attendanceService.getAttendances({
      accessToken,
      page,
      limit: dataLimit,
      name: dataSearchName,
      statusAttendanceIn: dataStatusAttendanceIn,
      startDateFilter: dataStartDateFilter,
      endDateFilter: dataEndDateFilter,
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

  async function getAttendanceById(id) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await attendanceService.getAttendanceById({
      accessToken,
      idAttendance: id,
    })

    if (result.status === "success") {
      setAttendanceById(result.data.attendance)
    } else {
      ToastNotify("error", result.message)
    }

    setModalDetail(true)
    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableAttendance
          attendances={attendances}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          limit={limit}
          setLimit={setLimit}
          changeData={changeData}
          statusAttendanceIn={statusAttendanceIn}
          getAttendanceById={getAttendanceById}
          setModalDetail={setModalDetail}
        />
        <ModalDetailAttendance
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
          attendanceById={attendanceById}
          setAttendanceById={setAttendanceById}
        />
      </div>
    </main>
  )
}

export default MainAttandance
