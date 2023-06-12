import React from "react"
import LoadingSpinner from "../template/LoadingSpinner"
import { useState } from "react"
import CardProfile from "./CardProfile"
import RefreshTokenService from "../../app/Services/RefreshTokenService"
import AuthApi from "../../AuthApi"
import UserService from "../../app/Services/UserService"
import Cookies from "js-cookie"
import ToastNotify from "../../utils/ToastNotify"
import { useEffect } from "react"
import FormChangePassword from "./FormChangePassword"

const MainProfile = () => {
  const Auth = React.useContext(AuthApi)
  const userService = new UserService()

  const [isLoading, setIsLoading] = useState(false)
  const [profile, setProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  async function getProfile() {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await userService.getUserById({
      accessToken,
    })

    if (result.status === "success") {
      setProfile(result.data.employee)
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function updateDataProfile(data) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }

    const result = await userService.updateDataProfile({
      accessToken,
      data,
    })

    if (result.status === "success") {
      ToastNotify("success", result.message)
      getProfile()
    } else {
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  async function changePasswordUser(data) {
    setIsLoading(true)
    const accessToken = await RefreshTokenService()
    if (accessToken === "fail") {
      Auth.setAuth(false)
      Cookies.remove("refreshToken")
      Cookies.remove("user")
    }
    data.accessToken = accessToken

    const result = await userService.changePasswordUser(data)

    if (result.status === "success") {
      ToastNotify("success", result.message)
      getProfile()
    } else {
      console.log(result)
      ToastNotify("error", result.message)
    }

    setIsLoading(false)
  }

  return (
    <main className='h-full overflow-y-auto'>
      <div className='px-6 mx-auto my-10'>
        {isLoading && <LoadingSpinner />}
        <CardProfile profile={profile} updateDataProfile={updateDataProfile} />
        <FormChangePassword changePasswordUser={changePasswordUser} />
      </div>
    </main>
  )
}

export default MainProfile
