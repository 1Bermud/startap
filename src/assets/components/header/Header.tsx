import React from 'react'
import styles from './Header.module.css'
import '../../../public/styles/global.css'
import logo from '../../../public/icons/logo.svg'

function Header() {
  return (
    <header>
        <div className="container">
            <nav>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                    <span>Grid</span>
                </div>
                <ul role='list'>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Who we are</a></li>
                    <li><a href="">What we do</a></li>
                    <li><a href="">Contact us</a></li>
                </ul>
                <button>Sign In</button>
            </nav>
        </div>
    </header>
  )
}

export default Header