import React, { useState } from "react"
import { BiSearchAlt } from "react-icons/bi"

const SearchPermission = (props) => {
  const [searchValue, setSearchValue] = useState("")

  function submitFormSearch(e) {
    e.preventDefault()
    props.changeData("searchName", searchValue)
  }

  return (
    <form onSubmit={(e) => submitFormSearch(e)}>
      <div className='flex items-center p-1 gap-2 rounded-lg shadow-xs border mr-4'>
        <label htmlFor='searchPermission'>
          <BiSearchAlt className='w-[20px] h-[20px]' />
        </label>
        <input
          className='p-1 appearance-none focus:outline-none dark:text-gray-300 rounded bg-transparent text-sm 3xl:text-base'
          id='searchPermission'
          type='search'
          placeholder='search name user'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
    </form>
  )
}

export default SearchPermission
