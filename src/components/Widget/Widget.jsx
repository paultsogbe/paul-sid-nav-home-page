import React from 'react'
import {ChevronRightIcon} from "../../theme/Icons"
import './Widget.scss'

const Widget = ({children, title, ...rest}) => { // ...rest permet de passer les props à ts les enfants de widget(schedule content see daitail)
  return (
    <div className="widget" {...rest}>
        <div className="header">
            <h3>{title}</h3>
            <button>
                See Detail
                <ChevronRightIcon />
            </button>
        </div>
       
        <div className="content">  
      
          {children}   {/* children permet de passer les props à tous les enfants de conten (mois, date,nom,categorie,completition)*/}
        </div>
       
        
    </div>
    
  )
}
 

export default Widget