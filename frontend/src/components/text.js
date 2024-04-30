import React,{useState} from "react";

const Text =()=>{
    let res=0
    let t=""
    const [result,setresult] = useState(null)
    const [text,settext] = useState("")
    // const [Confidence, setConfidence] = useState(null)
    // const [Class, setClass] = useState(null)
    const handletext = (event) =>{
        t+=event.target.value
        console.log(t)
        settext(t)
    }
    const handlesubmit = async (event)=>{
        event.preventDefault();
        const formdata = new FormData()
        formdata.append('text',text)

        const endpoint = "http://localhost:8000/predict"
        // let response =  await fetch(endpoint, {
        //     method: "POST",
        //     // body: formdata
        //     body : JSON.stringify({"text": text})
        // })
        let response = await fetch(endpoint,{
            method: "POST",
            body: formdata
        })
        res = await response.json()
        setresult(res.Result)
        // setClass(res.Class)
        // setConfidence(((res.Confidence)*100).toFixed(2))
    }
    return (
        <div>
            <h1>Enter Text</h1>

            <form onSubmit={handlesubmit}>
                <div style={{ marginBottom : "20px"}}>
                    <input type="text" onChange={handletext} value={text} id="text1"/>
                </div>
                <button type="submit">Upload</button>
            </form>
            {result!==null ? <h2>The Result is {result}</h2> : null}
        </div>
    )
}
export default Text