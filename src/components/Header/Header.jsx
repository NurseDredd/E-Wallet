import React from 'react'
import styles from './header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}><Link to ="/"><h2>CashNinjas</h2></Link>
        <nav>
            <ul>
            <li>
            <Link to ="/Settings">Settings</Link>
            </li>
            </ul>
            </nav>
    </header>
  )
}

export default Header