import React from "react"

const SelectStatusPermission = (props) => {
  return (
    <label htmlFor='selectStatusApproval'>
      <select
        id='selectStatusApproval'
        className='block w-full form-select rounded-lg shadow-xs border p-2 text-sm'
        value={props.statusApproval}
        onChange={(e) => props.changeData("statusApproval", e.target.value)}>
        <option value=''>Filter Status</option>
        <option value='Waiting Approvel'>Waiting Approvel</option>
        <option value='Approved'>Approved</option>
        <option value='Rejected'>Rejected</option>
        <option value='Revised'>Revised</option>
      </select>
    </label>
  )
}

export default SelectStatusPermission
