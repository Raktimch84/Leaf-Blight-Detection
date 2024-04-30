import React,{useState,useRef} from 'react'
import './App1.css'
const Drag = () => {
  const [images, setimages] = useState(null)
  const [confidence,setconfidence] = useState(null)
  const [isdragging, setisdragging] = useState(false)
  const fileinputref = useRef(null)
  function selectfiles(){
    fileinputref.current.click();
  }
  function onfileselect(event){

  }
  return (
    <div className='card'>
        <div className='top'>
            <p>Drag & Drop Image Uploading</p>
        </div>
        <div className='drag-area'>
            {isdragging? (<span className='select'>Drop Images Here</span>) : (
                <>
                    Drag & Drop Image here or {" "}
                    <span className='select' role='button' onClick={selectfiles}>Browse</span>
                </>
            ) }
            <input name='file' type='file' onChange={onfileselect}></input>
        </div>
        <div className='container'>
            <div className='image'>
                <span className='delete'>&times;</span>
            </div>
            <img src='' alt=''></img>
        </div>
        <button type='button'>
            Upload
        </button>
    </div>
  )
}

export default Drag
