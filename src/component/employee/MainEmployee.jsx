import React, { useEffect, useState } from "react"
import AuthApi from "../../AuthApi"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import Cookies from "js-cookie"
import EmployeeService from "../../app/Services/EmployeeService"
import ToastNotify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import TableEmployee from "./TableEmployee"
import ModalDetailEmployee from "./ModalDetailEmployee"
import { toast } from "react-toastify"

const MainEmployee = () => {
  const Auth = React.useContext(AuthApi)
  const employeeService = new EmployeeService()

  const [isLoading, setIsLoading] = useState(false)
  const [employees, setEmployees] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [searchName, setSearchName] = useState("")

  // Modal detail
  const [modalDetail, setModalDetail] = useState(false)
  const [employeeByNik, setEmployeeByNik] = useState({})

  useEffect(() => {
    getEmployees({ page, dataLimit: limit })
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getEmployees({
      page: selected + 1,
      dataLimit: limit,
      dataSearchName: searchName,
    })
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value)
        getEmployees({
          page: 1,
          dataLimit: value,
          dataSearchName: searchName,
        })
        break
      case "searchName":
        setPage(1)
        setSearchName(value)
        getEmployees({
          page: 1,
          dataLimit: limit,
          dataSearchName: value,
        })
        break
      default:
        console.log("change data is not defined")
    }
  }

  async function getEmployees({ page, dataLimit, dataSearchName }) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await employeeService.getEmployees({
      accessToken,
      page,
      limit: dataLimit,
      name: dataSearchName || "",
    })

    if (result.status === "success") {
      setEmployees(result.data.employees)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function getEmployeeByNik(nik) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await employeeService.getEmployeeByNik({
      accessToken,
      nik: nik,
    })

    if (result.status === "success") {
      setEmployeeByNik(result.data.employee)
      console.log(result.data)
    } else {
      ToastNotify("error", result.message)
    }

    setModalDetail(true)
    setIsLoading(false)
  }

  async function updateStatusEmployeeByNik(data) {
    setIsLoading(true)
    try {
      const accessToken = await RefreshTokenService()
      if (accessToken === "fail") {
        Auth.setAuth(false)
        Cookies.remove("refreshToken")
        Cookies.remove("user")
      }

      console.log(data)
      const result = await employeeService.updateStatusEmployeeByNik({
        nik: data.nik,
        status: data.status,
        accessToken,
      })

      if (result.status === "success") {
        ToastNotify("success", result.message)

        getEmployees({
          page: page,
          dataLimit: limit,
          dataSearchName: searchName,
        })
      }
    } catch (error) {
      const errorMessage = error.response
        ? error.response.data.message
        : error.message

      console.log(errorMessage)
      ToastNotify("error", errorMessage)
      setIsLoading(false)
    }
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='mx-auto'>
        {isLoading && <LoadingSpinner />}
        <TableEmployee
          employees={employees}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          limit={limit}
          changeData={changeData}
          getEmployeeByNik={getEmployeeByNik}
          updateStatusEmployeeByNik={updateStatusEmployeeByNik}
        />
        <ModalDetailEmployee
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
          employee={employeeByNik}
          setEmployeeByNik={setEmployeeByNik}
        />
      </div>
    </main>
  )
}

export default MainEmployee
