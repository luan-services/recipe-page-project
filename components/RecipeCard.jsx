import React from 'react'
import imgSrc from "/src/assets/images/image-omelette.jpeg"

const RecipeCard = () => {
  return (
    <div className="bg-white sm:p-8 lg:p-12 lg:rounded-xl">
        <div className="flex sm:pb-6 lg:pb-10">
            <img className="sm:rounded-xl" src={imgSrc} alt="Card Image"/>
        </div>
        <div className="flex p-6 sm:p-0 sm:pb-6 lg:pb-10">
            <span className="text-4xl lg:text-5xl  pb-4"> 
                Simple Omelette Recipe
            </span>
        </div>
    </div>
  )
}

export default RecipeCard
