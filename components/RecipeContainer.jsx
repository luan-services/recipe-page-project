import React from 'react'
import RecipeCard from './RecipeCard'

const RecipeContainer = () => {
    return (
        <div className="w-full min-h-screen flex flex-wrap justify-center lg:items-center mx-auto gap-6 sm:w-[40rem] lg:w-[52rem]">
            <RecipeCard/>
        </div>
    )
}

export default RecipeContainer
