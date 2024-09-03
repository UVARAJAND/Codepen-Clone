import React from 'react'
import '../App.css'
import logo from "../images/u-logo-dark.jpg"

const navbar = () => {
  return (
    <div className='navbar'>
        <div className='title_box'>
            <i className="fa-brands fa-codepen"></i>
            <span>Codepen-Clone</span>
        </div>
        <div className='developer_icon'>
            <div className='developer_contain'>
                <div className='details'>
                    <span>Developed by <a href='https://www.linkedin.com/in/uvarajan-dev/' target='_blank' rel="noreferrer">D.UVARAJAN</a></span>
                </div>
                <img src={logo} alt="icon"></img>
            </div>
        </div>  
    </div>
  )
}

export default navbar
