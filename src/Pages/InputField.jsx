import React ,{ useState} from "react";

const InputField = () => {
    const [data , setData] = useState("");
    const handleChange=(e)=>{
        setData(e.target.value);
    }
  return (
    <div>
        <input type="text" value={data} onChange={handleChange}/>   
        <p className="border-black-100">{data}</p>
    </div>
  )
}

export default InputField
