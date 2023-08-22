import './create.css';
import { useState, useRef } from 'react';
import Navbar from '../components/navbar';
function Create() {
    const fileselect = useRef(null);
    const [file, setfile] = useState('');
    const clickHandler=()=>{
        fileselect.current.click();
    }
    const submitHandler = (event) => {
        event.preventDefault();
        // setfile(event.target.file[0]);
    }
    const changeHandler = (e) => {
        const urlimg = URL.createObjectURL(e.target.files[0]);
        setfile(urlimg);

    }
    return (
        <>
            <div className='outer-boxcreate'>
                <Navbar />
                <   div className='uploadbox-main'>
                    <div className='drag-box'>
                    <h2 className='uploadbox-heading'>Add Two or more Photos to get Started</h2>
                    <form onSubmit={submitHandler}>
                            <input type="file" style={{display:'none'}} onChange={changeHandler} multiple ref={fileselect}></input>
                            {/* <input type='submit'></input> */}
                            <button onClick={clickHandler}>Select Some Files</button>
                            <button >Submit</button>
                        </form>
                        {file && <img src={file} className='image-preview' alt='imagenotfound'></img>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Create;