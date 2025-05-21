import React from 'react'
import './styles/NavModal.scss'
const NavModal = ({modalOpen,modalOpenClick}) => {
  return (
    <div className={`navModal ${modalOpen? 'open':''}`}>
      <a href="#" onClick={modalOpenClick}>
        <img src="./img/icon_search_close_m.png" alt="" />
      </a>
    </div>
  )
}

export default NavModal