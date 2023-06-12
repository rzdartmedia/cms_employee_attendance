import React from "react"
import { useState } from "react"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import ValidatorProfile from "../../app/validator/profile"

const FormChangePassword = (props) => {
  const [errors, setErrors] = useState({})

  const [passwordOld, setPasswordOld] = useState("")
  const [eyePasswordOld, setEyePasswordOld] = useState(false)
  const [passwordNew, setPasswordNew] = useState("")
  const [eyePasswordNew, setEyePasswordNew] = useState(false)
  const [confirmPassword, setConfirmPassowrd] = useState("")
  const [eyeConfirmPassword, setEyeConfirmPassword] = useState(false)

  function handleReset() {
    setPasswordOld("")
    setPasswordNew("")
    setConfirmPassowrd("")
    setErrors({})
  }

  function handleSubmit(e) {
    e.preventDefault()
    setErrors({})

    const data = {
      passwordOld,
      passwordNew,
      confirmPassword,
    }

    // validation form
    const { errors: errorValidate, formIsValid } =
      ValidatorProfile.validateUpdatePassword(data)

    if (!formIsValid) {
      setErrors(errorValidate)
      return false
    }

    props.changePasswordUser(data)
  }

  function openEye(eye) {
    switch (eye) {
      case "passwordOld":
        setEyePasswordOld(!eyePasswordOld)
        break
      case "passwordNew":
        setEyePasswordNew(!eyePasswordNew)
        break
      case "confirmPassword":
        setEyeConfirmPassword(!eyeConfirmPassword)
        break
      default:
        console.log("rak enek cug")
        break
    }
  }

  return (
    <div className='w-full lg:w-[50vw] mb-8 overflow-hidden rounded-lg shadow-xs border'>
      <div className='w-full overflow-x-auto'>
        <form onReset={handleReset} onSubmit={handleSubmit}>
          <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
            <tbody>
              <tr>
                <th className='px-6 py-4 text-lg text-black dark:text-white'>
                  Change Password
                </th>
              </tr>
              <tr className='bg-white text-sm text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Password Old
                </th>
                <td className='px-6 py-4 dark:text-white'>
                  <div
                    className={`${
                      errors.passwordOld ? "border-red-500" : ""
                    } appearance-none w-full bg-gray-200 text-gray-700 border 
                    flex justify-between items-center
                    border-gray-200 rounded  leading-tight py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <input
                      className='w-full bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
                      type={`${eyePasswordOld ? "text" : "password"}`}
                      placeholder='Enter your password'
                      value={passwordOld}
                      onChange={(e) => setPasswordOld(e.target.value)}
                    />
                    <span onClick={() => openEye("passwordOld")}>
                      {eyePasswordOld ? (
                        <AiOutlineEye className='w-[23px] h-[23px] cursor-pointer' />
                      ) : (
                        <AiOutlineEyeInvisible className='w-[23px] h-[23px] cursor-pointer' />
                      )}
                    </span>
                  </div>
                  <div className='text-red-500'>{errors.passwordOld}</div>
                </td>
              </tr>
              <tr className='bg-white text-sm text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Password New
                </th>
                <td className='px-6 py-4 dark:text-white'>
                  <div
                    className={`${
                      errors.passwordNew ? "border-red-500" : ""
                    } appearance-none w-full bg-gray-200 text-gray-700 border 
                    flex justify-between items-center
                    border-gray-200 rounded  leading-tight py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <input
                      className='w-full bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
                      type={`${eyePasswordNew ? "text" : "password"}`}
                      placeholder='Enter your password'
                      value={passwordNew}
                      onChange={(e) => setPasswordNew(e.target.value)}
                    />
                    <span onClick={() => openEye("passwordNew")}>
                      {eyePasswordNew ? (
                        <AiOutlineEye className='w-[23px] h-[23px] cursor-pointer' />
                      ) : (
                        <AiOutlineEyeInvisible className='w-[23px] h-[23px] cursor-pointer' />
                      )}
                    </span>
                  </div>
                  <div className='text-red-500'>{errors.passwordNew}</div>
                </td>
              </tr>
              <tr className='bg-white text-sm lg:text-base text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                <th
                  scope='row'
                  className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                  Confirm Password
                </th>
                <td className='px-6 py-4 dark:text-white'>
                  <div
                    className={`${
                      errors.confirmPassword ? "border-red-500" : ""
                    } appearance-none w-full bg-gray-200 text-gray-700 border 
                    flex justify-between items-center
                    border-gray-200 rounded  leading-tight py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500`}>
                    <input
                      className='w-full bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
                      type={`${eyeConfirmPassword ? "text" : "password"}`}
                      placeholder='Enter your password'
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassowrd(e.target.value)}
                    />
                    <span onClick={() => openEye("confirmPassword")}>
                      {eyeConfirmPassword ? (
                        <AiOutlineEye className='w-[23px] h-[23px] cursor-pointer' />
                      ) : (
                        <AiOutlineEyeInvisible className='w-[23px] h-[23px] cursor-pointer' />
                      )}
                    </span>
                  </div>
                  <div className='text-red-500'>{errors.confirmPassword}</div>
                </td>
              </tr>
              <tr className='bg-white text-sm text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                <th></th>
                <td className='px-6 py-4 dark:text-white flex justify-end space-x-2'>
                  <button
                    data-modal-toggle='defaultModal'
                    type='submit'
                    className='text-sm text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                    Save
                  </button>
                  <button
                    data-modal-toggle='defaultModal'
                    type='reset'
                    className='text-sm text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-white dark:text-gray-700 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}

export default FormChangePassword
