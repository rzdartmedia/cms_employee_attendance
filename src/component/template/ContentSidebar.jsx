import React from "react"
import { NavLink } from "react-router-dom"
import {
  TbBrandReactNative,
  TbFileTime,
  TbCalendarTime,
  TbReportAnalytics,
} from "react-icons/tb"
import { MdOutlineCalendarMonth, MdPeopleAlt } from "react-icons/md"
import AuthApi from "../../AuthApi"

const ContentSidebar = () => {
  const Auth = React.useContext(AuthApi)

  return (
    <div className='py-4 text-gray-500 dark:text-gray-400'>
      <NavLink
        to={"/attendance"}
        className='ml-6 text-lg font-bold text-gray-800 dark:text-gray-200 flex items-center'>
        <TbBrandReactNative className='w-[40px] h-[40px] text-purple-800' />
        <h2>Attendance</h2>
      </NavLink>
      <ul className='mt-6'>
        <li className='relative px-6 py-3'>
          {Auth.pageActive === "attendance" && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'></span>
          )}
          <NavLink
            className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
            to={"/attendance"}>
            <TbFileTime />
            <span className='ml-4 capitalize '>Attendance</span>
          </NavLink>
        </li>
        <li className='relative px-6 py-3'>
          {Auth.pageActive === "report-attendance" && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'></span>
          )}
          <NavLink
            className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
            to={"/report-attendance"}>
            <TbReportAnalytics />
            <span className='ml-4 capitalize '>Report Attendance</span>
          </NavLink>
        </li>
        <li className='relative px-6 py-3'>
          {Auth.pageActive === "attendance-by-month" && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'></span>
          )}
          <NavLink
            className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
            to={"/attendance-by-month"}>
            <MdOutlineCalendarMonth />
            <span className='ml-4 capitalize '>Attendance By Month</span>
          </NavLink>
        </li>
        <li className='relative px-6 py-3'>
          {Auth.pageActive === "employee" && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'></span>
          )}
          <NavLink
            className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
            to={"/employee"}>
            <MdPeopleAlt />
            <span className='ml-4 capitalize '>Employee</span>
          </NavLink>
        </li>
        <li className='relative px-6 py-3'>
          {Auth.pageActive === "permission" && (
            <span
              className='absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg'
              aria-hidden='true'></span>
          )}
          <NavLink
            className='inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 sidebar-active'
            to={"/permission"}>
            <TbCalendarTime />
            <span className='ml-4 capitalize '>Permission</span>
          </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default ContentSidebar
