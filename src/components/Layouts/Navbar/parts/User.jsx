import React from 'react'
import "./User.scss"
import profilIMG from '../../../../assets/images/profil.jpg'
import { ChevronDownIcon } from '../../../../theme/Icons'

const User = () => {
  return (
    <div className="navbar-user">
        <div className="photo">
            <img src={profilIMG} alt="profil photo" />
        </div>
        <div className="infos">
            <h2>Erza Miller</h2>
            <h3>erza.miller@email.com</h3>
        </div>
        <div className="icon">
            <ChevronDownIcon fill="#1C1F37" />
        </div>
    </div>
  )
}

export default User

// cette partie permet de mettre en place html avant de codé
{/* <div className="navbar-user">

  <div className="photo"></div>

  <div className="info"></div>

  <div className="icon"></div>
</div> */}