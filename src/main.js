import React from 'react'
import './main.css'
import Adress from './profile/Address'
import FullName from './profile/FullName'
import ProfilPhoto from './profile/ProfilPhoto'
export default function Main() {
    return (
        <div className="main">
            <ProfilPhoto/>
            <FullName/>
            <Adress/>
        </div>
    )
}
