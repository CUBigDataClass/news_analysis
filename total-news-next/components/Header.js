import React from 'react'
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Web Dev</span> News
            </h1>
            <p>Here to give you all the web dev news
                you could want!
            </p>
        </div>
    )
}

export default Header
