import React, { useState } from 'react'
const Like = () => {
    const [like , setLike] = useState(true);
    const handleLike=()=>{
        setLike(!like)
    }
  return (
    <div>
        <button onClick={handleLike}>
            {like ? "❤️ Liked" :"🤍 Liked" }
        </button>
      
    </div>
  )
}

export default Like
