import { Link, NavLink } from 'react-router-dom'
import { useState } from "react"
import '../../CSS/todas.css'
import './Header.css'
import React from 'react'

import Logo from '../../imgs/imglogo.png'

function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo da empresa" />

            <ul>
                <li>
                    <Link to={'/'}>Objetivos</Link>
                </li>
                <li>
                    <Link to={'/pecas'}>Peças</Link>
                </li>
                <li>
                    <Link to={'/sobre'}>Sobre</Link>
                </li>
                <li>
                    <Link to={'/videos'}>Videos</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header