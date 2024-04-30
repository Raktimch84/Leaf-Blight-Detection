import React,{useState} from "react";

const Front =()=>{
    let res=0
    const [image,setimage] = useState(null)
    const [Confidence, setConfidence] = useState(null)
    const [Class, setClass] = useState(null)
    const handleimage = (event) =>{
        setimage(event.target.files[0])
    }
    const handlesubmit = async (event)=>{
        event.preventDefault();
        const formdata = new FormData()
        formdata.append('file',image)

        const endpoint = "http://localhost:8000/predict"
        let response =  await fetch(endpoint, {
            method: "POST",
            body: formdata
        })
        res = await response.json()
        setClass(res.Class)
        setConfidence(((res.Confidence)*100).toFixed(2))
    }
    return (
        <div>
            <h1>Upload Image</h1>

            <form onSubmit={handlesubmit}>
                <div style={{ marginBottom : "20px"}}>
                    <input type="file" onChange={handleimage}/>
                </div>
                <button type="submit">Upload</button>
            </form>
            {Class!==null ? <h2>The class is {Class}</h2>: null}
            {Confidence!== null? <h2>Confidence: {Confidence}%</h2>: null}

        </div>

    )
}
export default Front