import React from "react"
import { useState } from "react"
import columnProfile from "./ColumnProfile"
import { useEffect } from "react"
import CardPhotoSwa from "./CardPhotoSwa"

const CardProfile = (props) => {
  const [errors, setErrors] = useState({})

  const [formData, setFormData] = useState({})

  useEffect(() => {
    setFormData(props.profile)
  }, [props.profile])

  const handleChange = (e, key) => {
    setFormData({ ...formData, [key]: e.target.value })
  }

  function handleReset(e) {
    e.preventDefault()
    setFormData(props.profile)
    setErrors({})
  }

  function inputColumn(data) {
    switch (data.type) {
      case "select":
        return (
          <select
            className='w-full text-sm bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
            type={data.type}
            placeholder={data.placeHolder}
            value={formData[data.key] || ""}
            onChange={(e) => handleChange(e, data.key)}>
            {data.select.map((select, indexSelect) => (
              <option key={indexSelect} value={select}>
                {select}
              </option>
            ))}
          </select>
        )
      case "textarea":
        return (
          <textarea
            className='w-full text-sm bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
            rows={3}
            type={data.type}
            placeholder={data.placeHolder}
            value={formData[data.key] || ""}
            onChange={(e) => handleChange(e, data.key)}
          />
        )
      default:
        return (
          <input
            className='w-full text-sm bg-transparent focus:outline-none focus:bg-transparent border-none focus:border-none'
            type={data.type}
            placeholder={data.placeHolder}
            value={formData[data.key] || ""}
            onChange={(e) => handleChange(e, data.key)}
            disabled={data.status ? true : false}
          />
        )
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()

    await props.updateDataProfile(formData)

    setFormData(props.profile)
  }

  return (
    <div className='w-full mx-auto mb-8 overflow-hidden rounded-lg shadow-xs'>
      <div className='w-full overflow-auto'>
        <div className='grid grid-col-1 xl:grid-cols-2 gap-10'>
          <form onSubmit={handleSubmit}>
            <table className='w-full text-sm text-left shadow-xs border rounded-lg text-gray-500 dark:text-gray-400'>
              <tbody>
                {columnProfile.map((data, index) => (
                  <tr
                    key={index}
                    className='bg-white lg:text-base text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                    <th
                      scope='row'
                      className='px-1 py-1 text-sm font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {data.name}
                    </th>
                    <td className='px-1 py-1 dark:text-white text-left'>
                      <div
                        className={`${
                          errors.passwordOld ? "border-red-500" : ""
                        } appearance-none w-full bg-transparent 
                    flex justify-between items-center
                    border-gray-200 rounded  leading-tight py-3 px-4 focus:outline-none focus:bg-white focus:border-gray-500`}>
                        {inputColumn(data)}
                      </div>
                      <div className='text-red-500'>{errors.name}</div>
                    </td>
                  </tr>
                ))}
                <tr className='bg-white text-sm text-black border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
                  <th></th>
                  <td className='px-1 py-4 dark:text-white flex justify-end space-x-2'>
                    <button
                      data-modal-toggle='defaultModal'
                      type='submit'
                      className='text-sm text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                      Save
                    </button>
                    <button
                      data-modal-toggle='defaultModal'
                      onClick={handleReset}
                      className='text-sm text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-white dark:text-gray-700 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'>
                      Cancel
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>

          <div>
            <CardPhotoSwa
              photoSwa={props.profile.photoSwa}
              photoKtp={props.profile.photoKtp}
              photoNpwp={props.profile.photoNpwp}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardProfile
