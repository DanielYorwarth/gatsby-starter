import React from 'react'
import footerStyles from './Footer.module.css'

const Footer = () => (
    <footer className={footerStyles.footer}>
        <div className="container text-center">
            <span className="text-dark">Created with <img alt="heart" src="https://www.pagecreative.co.uk/wp-content/themes/pagecreative/images/heart.svg"></img> by PAGE</span>
        </div>
    </footer>
)

export default Footer