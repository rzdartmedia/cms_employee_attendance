import Cookies from "js-cookie"
import React, { useEffect, useState } from "react"
import PermissionService from "../../app/Services/PermissionService"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import AuthApi from "../../AuthApi"
import ToastNotify from "../../utils/ToastNotify"
import LoadingSpinner from "../template/LoadingSpinner"
import ModalDetailPermission from "./ModalDetailPermission"
import TablePermissions from "./TablePermissions"

const MainPermission = () => {
  const Auth = React.useContext(AuthApi)
  const permissionService = new PermissionService()
  const [isLoading, setIsLoading] = useState(false)
  const [permissions, setPermissions] = useState([])
  const [totalData, setTotalData] = useState(0)
  const [totalPages, setTotalPages] = useState(1)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(15)
  const [searchName, setSearchName] = useState("")
  const [statusApproval, setStatusApproval] = useState("")
  const [startDateFilter, setstartDateFilter] = useState("")
  const [endDateFilter, setEndDateFilter] = useState("")

  // Modal detail
  const [modalDetail, setModalDetail] = useState(false)
  const [permissionId, setPermissionId] = useState({})

  useEffect(() => {
    getDataPermissions({ page, dataLimit: limit })
  }, [])

  const changePage = ({ selected }) => {
    setPage(selected + 1)
    getDataPermissions({
      page: selected + 1,
      dataLimit: limit,
      dataSearchName: searchName,
      dataStatusApproval: statusApproval,
      dataStartDateFilter: startDateFilter,
      dataEndDateFilter: endDateFilter,
    })
  }

  function changeData(data, value) {
    switch (data) {
      case "limit":
        setPage(1)
        setLimit(value)
        getDataPermissions({
          page: 1,
          dataLimit: value,
          dataSearchName: searchName,
          dataStatusApproval: statusApproval,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      case "searchName":
        setPage(1)
        setSearchName(value)
        getDataPermissions({
          page: 1,
          dataLimit: limit,
          dataSearchName: value,
          dataStatusApproval: statusApproval,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      case "statusApproval":
        setPage(1)
        setStatusApproval(value)
        getDataPermissions({
          page: 1,
          dataLimit: limit,
          dataSearchName: searchName,
          dataStatusApproval: value,
          dataStartDateFilter: startDateFilter,
          dataEndDateFilter: endDateFilter,
        })
        break
      default:
        setPage(1)
        setstartDateFilter(value.startDate)
        setEndDateFilter(value.endDate)
        getDataPermissions({
          page: 1,
          dataLimit: limit,
          dataSearchName: searchName,
          dataStatusApproval: statusApproval,
          dataStartDateFilter: value.startDate,
          dataEndDateFilter: value.endDate,
        })
    }
  }

  async function getDataPermissions({
    page,
    dataLimit,
    dataSearchName,
    dataStatusApproval,
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

    const result = await permissionService.getPermissions({
      accessToken,
      page,
      limit: dataLimit,
      name: dataSearchName,
      statusApproval: dataStatusApproval,
      startDateFilter: dataStartDateFilter,
      endDateFilter: dataEndDateFilter,
    })

    if (result.status === "success") {
      setPermissions(result.data.permissions)
      setTotalData(result.totalData)
      setTotalPages(result.totalPages)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function getPermissionById(id) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await permissionService.getPermissionById({
      accessToken,
      idPermission: id,
    })

    if (result.status === "success") {
      const dataResult = result.data.permission
      setPermissionId(result.data.permission[dataResult.length - 1])
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
        <TablePermissions
          permissions={permissions}
          page={page}
          changePage={changePage}
          totalData={totalData}
          totalPages={totalPages}
          limit={limit}
          setLimit={setLimit}
          changeData={changeData}
          statusApproval={statusApproval}
          getPermissionById={getPermissionById}
        />
        <ModalDetailPermission
          modalDetail={modalDetail}
          setModalDetail={setModalDetail}
          permissionId={permissionId}
          setPermissionId={setPermissionId}
        />
      </div>
    </main>
  )
}

export default MainPermission
