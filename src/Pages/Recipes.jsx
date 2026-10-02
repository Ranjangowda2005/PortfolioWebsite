import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Recipes = () => {
    useEffect(()=>{
        axios.get("https://dummyjson.com/recipes")
        .then((res)=>{
            console.log(res.data.recipes)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
  return (
    <div>
        Recipes
      
    </div>
  )
}

export default Recipes
