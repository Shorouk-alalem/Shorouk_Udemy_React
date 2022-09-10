import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoGlobeOutline, IoSearchSharp, IoCartOutline, IoMenuSharp } from 'react-icons/io5'
import styles from './appStyles.module.css'

export const NavBar = () => {
    const [filter, setFilter] = useState('');

    const SearchText = (e) => {
        setFilter(e.target.value)
    }



    return (
        <nav className={styles.NavBar}>

            <div className={styles.smallScreen}>
                <IoMenuSharp size={25} />
            </div>
            <NavLink to='/' className={styles.udemyLogo} >
                <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="UdemyLogo" />
            </NavLink>
            <NavLink to='/category' className={`${styles.CourseCategories} ${styles.textSM}`}>Categories</NavLink>
            <div className={styles.searchBar}>
                <form className={styles.searchBar}>
                    <button type="submit" className={styles.searchBtn}>
                        <IoSearchSharp size={22} />
                    </button>
                    <input name="search-text"
                        id="Search--text"
                        type="search"
                        value={filter}
                        onChange={SearchText}
                        placeholder="Search for anything"
                        className={`${styles.searchbBarInput} ${styles.textSM}`} />
                </form>
            </div>
            <NavLink to='/Business' className={`${styles.Link1} ${styles.textSM}`}> Udemy Business</NavLink>
            <NavLink to='/Teach' className={`${styles.Link2} ${styles.textSM}`}>Teach On Udemy</NavLink>
            <NavLink to='/Cart' className={styles.shopingCart}>
                <IoCartOutline size={25} />
            </NavLink>
            <div className={styles.section2Navbar}>
                <NavLink to='/Login' className={styles.Log}>Log in</NavLink>
                <NavLink to='/SignUp' className={styles.Sign}>Sign Up</NavLink>
                <NavLink to='/Language' className={styles.Lang}>
                    <IoGlobeOutline size={22} />
                </NavLink>
            </div>
        </nav>
    )
}
