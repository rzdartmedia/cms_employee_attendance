import React from "react"

const SelectStatusReportAttendanceIn = (props) => {
  return (
    <label>
      <select
        className='block w-full form-select rounded-lg shadow-md border p-2 text-sm'
        value={props.statusAttendanceIn}
        onChange={(e) =>
          props.changeData("statusAttendanceIn", e.target.value)
        }>
        <option value=''>Filter Status</option>
        <option value=''>All</option>
        <option value='on time'>On Time</option>
        <option value='late'>Late</option>
      </select>
    </label>
  )
}

export default SelectStatusReportAttendanceIn
