import React, { useEffect, useState } from 'react';
import { renderMatches, useNavigate } from "react-router-dom";
import './create.css';
import Navbar from '../components/navbar';
import axios from "axios";

function Create() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('userId')) {
            navigate("/login");
        }
    }, [])

    const handleAddMorePhotos = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput.value = ''; // Clear the file input to allow selecting more files
        fileInput.click(); // Trigger the file input again
    };


    const handleImageUpload = (file) => {

        // var file = el;
        var reader = new FileReader();
        reader.onloadend = function () {
            console.log('RESULT', reader.result)
            setImagePreviews((imagePreviews)=> [...imagePreviews, reader.result]);
        }
        reader.readAsDataURL(file);


    }

    const uploadMultipleImages = (e) => {
        const files = e.target.files
        console.log(files);
        Array.from(files).map((file) => {
            console.log(file)
            handleImageUpload(file);
        })
        // console.log(imagePreviews)
    }

    const handleSubmit = async ()=>{
       const {data} =  await axios.post("http://localhost:5000/upload/user", { userId: localStorage.getItem("userId"), datatosend: imagePreviews});
       console.log(data)
    }



    return (
        // <div>
        //     <input
        //         type="file"
        //         multiple
        //         accept="image/*"
        //         onChange={handleFileChange}
        //         id="fileInput"
        //         style={{ display: 'none' }}
        //     />

        //      <button onClick={handleAddMorePhotos}>Add More Photos</button>

        //     {selectedFiles.length > 0 && (
        //         <div>
        //             <h2>Selected Files:</h2>
        //             <ul>
        //                 {selectedFiles.map((file, index) => (
        //                     <li key={index}>
        //                         {file.name} - {file.type}
        //                     </li>
        //                 ))}
        //             </ul>
        //         </div>
        //     )}

        //     {imagePreviews.length > 0 && (
        //         <div>
        //             <h2>Image Previews:</h2>
        //             <div className="preview-container">
        //                 {imagePreviews.map((preview, index) => (
        //                     <img
        //                         key={index}
        //                         src={preview}
        //                         alt={`Preview ${index}`}
        //                         className="image-preview"
        //                     />
        //                 ))}
        //             </div>
        //         </div>
        //     )}

        //     {uploadSuccess && <p>Upload successful!</p>}

        //     <button onClick={handleUpload}>Upload Images</button>
        // </div>
        <div className='create-container'>
            <Navbar />

            <div className='create-box'>

                <div className='add-head'>
                    Add two or more photos to get started
                </div>


                <div className='drag-box'>

                    <div className='dnd-head'>Drop your photos here, paste or </div>
                    <div>
                        <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={uploadMultipleImages}
                            id="fileInput"
                            style={{ display: 'none' }}
                        />
                        <label htmlFor='fileInput' className='input-link'> Select from your device</label>
                    </div>
                </div>

                {/* <div> {imagePreviews.map((img, i)=> <img key={i} className='preview-img' src={img} />)}</div>   */}
                
                {imagePreviews.map((img, i) => {
                    return <img key={i} className='preview-img' src={img} />
                }
                )}

                <button onClick={handleSubmit}> Submit </button>

            </div>
        </div>
    );
}

export default Create;
