import React from "react"

const SelectStatusAttendanceIn = (props) => {
  return (
    <label htmlFor='selectStatusAttendanceIn'>
      <select
        id='selectStatusAttendanceIn'
        className='block w-full form-select rounded-lg shadow-xs border p-2 text-sm'
        value={props.statusAttendanceIn}
        onChange={(e) =>
          props.changeData("statusAttendanceIn", e.target.value)
        }>
        <option value=''>Filter Status</option>
        <option value=''>All</option>
        <option value='not late'>Not Late</option>
        <option value='late'>Late</option>
      </select>
    </label>
  )
}

export default SelectStatusAttendanceIn
