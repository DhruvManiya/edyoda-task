import React from 'react'
import classes from '../styles/subnav.module.css'
const SubNav = () => {
  return (
    <nav className={`${classes.nav}`}>
        <img src="/logo.PNG" alt="" className={`${classes.logo}`} />
        <div>
            <p>Hi Test Learner</p>
            <img src="/p7.jpg" alt="" />
        </div>
    </nav>
  )
}

export default SubNav