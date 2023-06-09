import React from "react"

const DetailEmployee = (props) => {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              NIK
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.nik}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Fullname
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.name}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              position
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.position}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              division
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.division}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Gender
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.gender}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              npwp
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.npwp}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Place and Date Of Birth
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2 capitalize'>
              {props.employee?.placeOfBirth}, {props.employee?.dateOfBirth}
            </td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              address KTP
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.addressKtp}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              address
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.address}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Number Phone
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.noHp}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              religion
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.religion}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize'>
              email Personal
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.emailPersonal}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white capitalize'>
              email Employee
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.emailEmployee}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              PTKP
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.ptkp}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              blood
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.blood}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              name Family
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.nameFamily}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              connection Family
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.connectionFamily}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              Number Phone Family
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.noHpFamily}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              work Location
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.workLocation}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 capitalize'>
            <th
              scope='row'
              className='px-2 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
              role
            </th>
            <td className='px-2 py-2'>:</td>
            <td className='px-2 py-2'>{props.employee?.role}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default DetailEmployee
