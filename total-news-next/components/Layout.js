import Nav from './Nav'
import Header from './Header'
import styles from '../styles/Layout.module.css'

import React from 'react'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>

            <main className={styles.main}>
                <Header />
            {children}
            </main>
        </div>
        </>
    )
}

export default Layout