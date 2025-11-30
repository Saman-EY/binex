import React, { ComponentProps } from 'react'
import CloseSquareIcon from '../icons/CloseSquareIcon'

type CloseButtonProps = ComponentProps<"button">

function CloseBtn(props: CloseButtonProps) {
  return (
    <>
        <button {...props}>
            <i className='text-down'><CloseSquareIcon /></i>
        </button>
    </>
  )
}

export default CloseBtn