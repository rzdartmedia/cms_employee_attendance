import React from "react"
import ImageModal from "../template/ImageModal"
import { noCamera } from "../../assets/images"

const CardPhotoSwa = (props) => {
  return (
    <div className='w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 space-y-4'>
      <div>
        <div className='text-sm 2xl:text-base font-bold text-black dark:text-white'>
          Photo SWA
        </div>
        <ImageModal
          src={props.photoSwa}
          width='w-[30%] md:w-[20%]'
          height='h-full'
          alt='SWA'
        />
      </div>

      <div className='grid grid-cols-2 gap-3'>
        <div className='w-[90%] md:w-[50%] xl:w-[70%]'>
          <div className='text-sm 2xl:text-base font-bold text-black dark:text-white'>
            Photo KTP
          </div>
          <ImageModal
            src={props.photoKtp}
            width='w-full md:w-[300px]'
            height='h-full'
            alt='KTP'
          />
        </div>
        <div className='w-[90%] md:w-[50%] xl:w-[70%]'>
          <div className='text-sm 2xl:text-base font-bold text-black dark:text-white'>
            Photo NPWP
          </div>
          {props.photoNpwp ? (
            <ImageModal
              src={props.photoNpwp}
              width='w-full md:w-[300px]'
              height='h-full'
              alt='KTP'
            />
          ) : (
            <div className='w-full h-full rounded-xl border-primary border-2 flex justify-center items-center'>
              <img src={noCamera} alt='NPWP' />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardPhotoSwa
