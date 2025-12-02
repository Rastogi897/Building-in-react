import React from 'react'
import "./layout.css"

const Layout = () => {
    return (
        <div class="main-container">
            <header class="header">Header</header>
            <div class="mid-container">
                <div class="left">Left</div>
                <div class="center">Center</div>
                <div class="right">Right</div>
            </div>
            <footer class="footer">Footer</footer>
        </div>
    )
}

export default Layout