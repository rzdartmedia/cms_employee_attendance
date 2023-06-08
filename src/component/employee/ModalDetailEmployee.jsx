import React from "react"
import DetailEmployee from "./DetailEmployee"
import ImageModal from "../template/ImageModal"
import { noCamera } from "../../assets/images"

const ModalDetailEmployee = (props) => {
  function closeModal() {
    props.setEmployeeByNik({})
    props.setModalDetail(false)
  }

  return (
    <div
      tabIndex='-1'
      aria-hidden='true'
      className={`${
        !props.modalDetail ? "invisible" : ""
      } fixed inset-0 z-30 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center overflow-auto`}>
      <div className='w-full min-h-max max-h-[85vh] px-4 py-4 overflow-auto bg-white rounded-t-lg dark:bg-gray-800 sm:rounded-lg sm:m-4 sm:max-w-xl'>
        <div className='relative bg-white rounded-lg p-2 dark:bg-gray-700'>
          <div className='flex justify-between items-start rounded-t'>
            <h3 className='p-2 font-semibold text-gray-900 dark:text-white'>
              Detail Employee
            </h3>
            <button
              onClick={closeModal}
              type='button'
              className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
              data-modal-toggle='defaultModal'>
              <svg
                aria-hidden='true'
                className='w-5 h-5'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'></path>
              </svg>
              <span className='sr-only'>Close modal</span>
            </button>
          </div>
          <div>
            <div className='max-w-lg m-auto space-y-3 my-4 text-sm'>
              <DetailEmployee employee={props.employee} />
              <div className='flex flex-wrap gap-10'>
                <div>
                  <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
                    Photo KTP
                  </label>
                  <ImageModal
                    src={props.employee.photoKtp}
                    width='w-[120px]'
                    height='h-[140px]'
                    alt='KTP'
                  />
                </div>
                <div>
                  <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
                    Photo SWA
                  </label>
                  {props.employee.photoSwa ? (
                    <ImageModal
                      src={props.employee.photoSwa}
                      width='w-[120px]'
                      height='h-[140px]'
                      alt='Attendance Out'
                    />
                  ) : (
                    <div className='w-[120px] h-[140px] rounded-xl border-primary border-2 flex justify-center items-center'>
                      <img className='' src={noCamera} alt='SWA' />
                    </div>
                  )}
                </div>
                <div>
                  <label className='block text-gray-700 text-sm font-bold mb-1 dark:text-gray-300'>
                    Photo NPWP
                  </label>
                  {props.employee.photoKtp ? (
                    <ImageModal
                      src={props.employee.photoKtp}
                      width='w-[120px]'
                      height='h-[140px]'
                      alt='Attendance Out'
                    />
                  ) : (
                    <div className='w-[120px] h-[140px] rounded-xl border-primary border-2 flex justify-center items-center'>
                      <img className='' src={noCamera} alt='NPWP' />
                    </div>
                  )}
                </div>
              </div>
              <div className='flex justify-end items-center p-6 pb-0 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
                <button
                  data-modal-toggle='defaultModal'
                  type='button'
                  onClick={closeModal}
                  className='text-white bg-primary dark:bg-gray-700 dark:border-white dark:border hover:drop-shadow-xl focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-gray-600 dark:hover:text-gray-200'>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalDetailEmployee
