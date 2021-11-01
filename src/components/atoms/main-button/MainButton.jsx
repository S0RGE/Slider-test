import React from 'react'

import './style.scss'

const MainButton = ({children, onClick}) => {

    return (
        <>
            <button className="main__buttons" onClick={onClick}>{children}</button>
        </>
    )
}

export default MainButton
