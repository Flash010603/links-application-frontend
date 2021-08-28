import React from 'react'

const date = new Date();

export const Footer: React.FC = () => {
    return (
        <footer>
            <p className="author">Franklin Martinez Lucas - {date.getFullYear()}</p>
            <section className="container_social_icons">
                <div className="item_social_icon facebook"></div>
                <div className="item_social_icon twitter"></div>
                <div className="item_social_icon instagram"></div>
                <div className="item_social_icon github"></div>
            </section>
        </footer>
    )
}
