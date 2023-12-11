import React from 'react'
import { AttachmentIcon } from '../../../../svg'
import Menu from './Menu'

export default function Attachments({showAttachments, setShowAttachments, setShowPicker}) {

  return (
    <li className='relative'>
        <button type='button' className="btn" onClick={() => {
          setShowPicker(false);
          setShowAttachments(!showAttachments)
        }}>
            <AttachmentIcon className="dark:fill-dark_svg_1" />
        </button>
        {/* Menu */}
        {showAttachments ? <Menu /> : null}
    </li>
  )
}
