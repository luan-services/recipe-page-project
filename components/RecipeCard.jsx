import React from 'react'
import { useState } from 'react'
import imgSrc from "/src/assets/images/image-omelette.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'


const RecipeCard = () => {


  const [solid, setSolid] = useState(faHeart)

  function setIcon() {
    {solid == faHeartSolid ? setSolid(faHeart) : setSolid(faHeartSolid) }
  }

  return (
    <div className="bg-white sm:p-8 lg:p-12 lg:rounded-xl">
        <div className="flex sm:pb-6 lg:pb-10">
            <img className="sm:rounded-xl" src={imgSrc} alt="Card Image"/>
        </div>
        <div className="flex items-center justify-between p-6 sm:p-0 sm:pb-6 lg:pb-10">
            <span className="text-4xl lg:text-5xl"> 
                Simple Omelette Recipe 
            </span>
            <button onClick={setIcon} className="hover:cursor-pointer text-3xl text-pink-700">
              <FontAwesomeIcon icon={solid} />
            </button >
        </div>
        
        
        
    </div>
  )
}

export default RecipeCard
