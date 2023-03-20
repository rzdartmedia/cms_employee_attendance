import React, { useState } from "react"

function ImageModal(props) {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <img
        className={`object-contain ${props.width} ${props.height} rounded-xl border-primary border-2 cursor-pointer`}
        src={props.src}
        alt={props.alt}
        onClick={() => setShowModal(true)}
      />

      {showModal && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
          onClick={() => setShowModal(false)}>
          <div className='max-w-[80vw] max-h-[90vh] bg-white rounded-lg overflow-hidden'>
            <img
              src={props.src}
              alt='large'
              className='max-w-[80vw] max-h-[90vh] object-contain rounded-xl'
            />
            <button
              onClick={() => setShowModal(false)}
              className='absolute top-0 right-0 m-4 text-white'>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageModal
