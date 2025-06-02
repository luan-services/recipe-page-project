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
        <div className="flex items-center justify-between p-4 sm:p-0 sm:pb-4 lg:pb-10">
            <span className="text-4xl lg:text-5xl"> 
                Simple Omelette Recipe 
            </span>
            <button onClick={setIcon} className="hover:cursor-pointer text-3xl text-pink-700">
              <FontAwesomeIcon icon={solid} />
            </button >
        </div>
        <div className="flex p-4 sm:p-0 sm:pb-4 lg:pb-10">
                <h3 className="text-gray-500 text-md lg:text-xl font-outfit"> 
                    An easy and quick dish, perfect for any meal. This classic omelette combine beaten eggs cooked to perfection, optionally
                    filled with your choice of cheese, vegetables, or meats.
                </h3> 
        </div>
        <div className="p-4 sm:p-0 sm:pb-4 lg:pb-4">
          <div className="bg-custom-rose-50 p-6 rounded-lg">
            <h2 className="font-bold text-custom-rose-800 text-xl lg:text-2xl font-outfit pb-2"> 
                Preparation Time
            </h2>
            <ul className="list-disc text-gray-500 text-md lg:text-xl font-outfit p-8 pt-2 pb-0">
              <li><span className="font-bold">Total:</span> Approximately 10 minutes</li>
              <li><span className="font-bold">Preparation:</span> 5 minutes</li>
              <li><span className="font-bold">Cooking:</span> 5 minutes</li>
            </ul>
          </div>
        </div>
        <div className="pl-4 pr-4 sm:pl-0 sm:pr-0">
          <hr class="h-px my-8 bg-gray-400 border-0"></hr>
        </div>
        <div className="p-4 sm:p-0 sm:pb-4 rounded-lg">
          <h2 className="text-custom-brown-800 text-2xl lg:text-3xl pb-4"> 
            Ingredients
          </h2>
          <ul className="list-disc text-gray-500 text-md lg:text-xl font-outfit p-8 pt-2 pb-0">
            <li>2-3 large eggs</li>
            <li>Salt, to taste</li>
            <li>Pepper, to taste</li>
            <li>1 tablespoon of butter or oil</li>
            <li>Optional fillings: cheese, diced vegetables, cooked meats, herbs</li>
          </ul>
        </div>
        <div className="pl-4 pr-4 sm:pl-0 sm:pr-0">
          <hr class="h-px my-8 bg-gray-400 border-0"></hr>
        </div>
        <div className="p-4 sm:p-0 sm:pb-4 rounded-lg">
          <h2 className="text-custom-brown-800 text-2xl lg:text-3xl pb-4"> 
            Instructions
          </h2>
          <ul className="list-decimal text-gray-500 text-md lg:text-xl font-outfit p-8 pt-2 pb-0">
            <li><span className="font-bold">Beat the eggs: </span>In a bowl, beat the eggs with a pinch of salt and Pepper
            until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.</li>
            <li><span className="font-bold">Heat the pan: </span>Place a non-stick frying pan over medium heat and add butter
            or oil.</li>
            <li><span className="font-bold">Cook the omelette: </span>Once the butter is melted and bubbling, pour in the eggs. 
            Tilt the pan to ensure the eggs evenly coat the surface.</li>
            <li><span className="font-bold">Add fillings (optional): </span>When the eggs begin to set at the edges but are still
            slightly runny in the middle, sprinkle your chosen fillings over one half of the omellete.</li>
            <li><span className="font-bold">Fold and serve: </span>As the omelette continues to cook, carefully lift one edge and 
            fold it over the fillings. Let it cook for another minute, then slide it on a plate.</li>
            <li><span className="font-bold">Enjoy: </span>Serve hot, with additional salt and pepper if needed.</li>
          </ul>
        </div>
        <div className="pl-4 pr-4 sm:pl-0 sm:pr-0">
          <hr class="h-px my-8 bg-gray-400 border-0"></hr>
        </div>
        <div className="p-4 sm:p-0 sm:pb-4 rounded-lg">
          <h2 className="text-custom-brown-800 text-2xl lg:text-3xl pb-4"> 
            Nutrition
          </h2>
          <h3 className="text-gray-500 text-md lg:text-xl font-outfit pb-4"> 
            The table below shows nutritional values per serving without the additional fillings.
          </h3> 
          <div className="flex justify-between p-4 pb-2">
            <h3 className="inline-block w-5/10 text-gray-500 text-md lg:text-xl font-outfit font-bold"> 
              Calories
            </h3> 
            <h3 className="inline-block w-5/10 text-custom-brown-800 text-md lg:text-xl font-outfit font-bold"> 
              277kcal
            </h3> 
          </div>
          <div className="sm:pl-0 sm:pr-0">
            <hr class="h-px bg-gray-400 border-0"></hr>
          </div>
          <div className="flex justify-between p-4 pb-2">
            <h3 className="inline-block w-5/10 text-gray-500 text-md lg:text-xl font-outfit font-bold"> 
              Carbs
            </h3> 
            <h3 className="inline-block w-5/10 text-custom-brown-800 text-md lg:text-xl font-outfit font-bold"> 
              0g
            </h3> 
          </div>
          <div className="sm:pl-0 sm:pr-0">
            <hr class="h-px bg-gray-400 border-0"></hr>
          </div>
          <div className="flex justify-between p-4 pb-2">
            <h3 className="inline-block w-5/10 text-gray-500 text-md lg:text-xl font-outfit font-bold"> 
              Protein
            </h3> 
            <h3 className="inline-block w-5/10 text-custom-brown-800 text-md lg:text-xl font-outfit font-bold"> 
              20g
            </h3> 
          </div>
          <div className="sm:pl-0 sm:pr-0">
            <hr class="h-px bg-gray-400 border-0"></hr>
          </div>
            <div className="flex justify-between p-4 pb-2">
            <h3 className="inline-block w-5/10 text-gray-500 text-md lg:text-xl font-outfit font-bold"> 
              Fat
            </h3> 
            <h3 className="inline-block w-5/10 text-custom-brown-800 text-md lg:text-xl font-outfit font-bold"> 
              22g
            </h3> 
          </div>
        </div>

        
        
    </div>
  )
}

export default RecipeCard
