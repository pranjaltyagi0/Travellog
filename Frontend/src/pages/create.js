// // import React, { useState } from 'react';
// // import axios from 'axios';

// // function Create() {
// //   const [files, setFiles] = useState([]);
// //   const [uploadedFiles, setUploadedFiles] = useState([]);

// //   function handleMultipleChange(event) {
// //     setFiles([...event.target.files]);
// //   }

// //   function handleMultipleSubmit(event) {
// //     event.preventDefault();
// //     const url = 'http://localhost:5000/upload/user';
// //     const formData = new FormData();
// //     files.forEach((file, index) => {
// //       formData.append(`file${index}`, file);
// //     });

// //     const config = {
// //       headers: {
// //         'content-type': 'multipart/form-data',
// //       },
// //     };

// //     axios.post(url, formData, config)
// //       .then((response) => {
// //         console.log(response.data);
// //         setUploadedFiles(response.data.files);
// //       })
// //       .catch((error) => {
// //         console.error("Error uploading files: ", error);
// //       });
// //   }

// //   return (
// //     <div className="App">
// //       <form onSubmit={handleMultipleSubmit}>
// //         <h1>React Multiple File Upload</h1>
// //         <input type="file" multiple onChange={handleMultipleChange} />
// //         <button type="submit">Upload</button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Create;
// import React, { useState } from 'react';
// import './create.css'
// function Create() {
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [imagePreviews, setImagePreviews] = useState([]);

//     const handleFileChange = (e) => {
//         const files = Array.from(e.target.files);
//         console.log(files)
//         const previews = [];

//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];

//             if (file.type.startsWith("image/")) {
//                 const reader = new FileReader();

//                 reader.onload = (event) => {
//                     const preview = event.target.result;
//                     previews.push(preview);

//                     if (previews.length === files.length) {
//                         setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
//                         setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
//                     }
//                 };

//                 reader.readAsDataURL(file);
//             }
//         }
//     };

//     const handleAddMorePhotos = () => {
//         const fileInput = document.getElementById("fileInput");
//         fileInput.value = ''; // Clear the file input to allow selecting more files
//         fileInput.click(); // Trigger the file input again
//     };

//     return (
//         <div>
//             <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 id="fileInput"
//                 style={{ display: 'none' }}
//             />

//             <button onClick={handleAddMorePhotos}>Add More Photos</button>

//             {selectedFiles.length > 0 && (
//                 <div>
//                     <h2>Selected Files:</h2>
//                     <ul>
//                         {selectedFiles.map((file, index) => (
//                             <li key={index}>
//                                 {file.name} - {file.type}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {imagePreviews.length > 0 && (
//                 <div>
//                     <h2>Image Previews:</h2>
//                     <div className="preview-container">
//                         {imagePreviews.map((preview, index) => (
//                             <img
//                                 key={index}
//                                 src={preview}
//                                 alt={`Preview ${index}`}
//                                 className="image-preview"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// // export default Create;
// import React, { useState } from 'react';
// import './create.css'
// function Create() {
//     const [selectedFiles, setSelectedFiles] = useState([]);
//     const [imagePreviews, setImagePreviews] = useState([]);
//     const [uploadSuccess, setUploadSuccess] = useState(false);

//     const  handleFileChange = (e) => {
//         const files = Array.from(e.target.files);
//         const previews = [];

//         for (let i = 0; i < files.length; i++) {
//             const file = files[i];

//             if (file.type.startsWith("image/")) {
//                 const reader = new FileReader();

//                 reader.onload = (event) => {
//                     const preview = event.target.result;
//                     previews.push(preview);

//                     if (previews.length === files.length) {
//                         setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
//                         setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
//                     }
//                 };

//                 reader.readAsDataURL(file);
//             }
//         }
//     };

//     const handleUpload = () => {
//         const base64Images = imagePreviews.map((preview) => {
//             // Remove the data URL prefix to get the base64 data
//             return preview.replace(/^data:image\/[a-z]+;base64,/, "");
//         });

//         // Create an object to send to the backend
//         const dataToSend = {
//             images: base64Images,
//         };
//         console.log(dataToSend)
//         // Send a POST request to the backend to upload the base64 encoded images
//         fetch("http://localhost:5000/upload/user", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify({ userId: 2, datatosend: dataToSend }),
//         })
//             .then((response) => {
//                 if (response.ok) {
//                     setUploadSuccess(true);
//                     return response.json();;
//                     // Optionally, reset selectedFiles and imagePreviews here
//                 } else {
//                     setUploadSuccess(false);
//                 }
//             }).then((data) => {
//                 console.log(data);
//             }).catch((error) => {
//                 console.error("Error uploading images:", error);
//                 setUploadSuccess(false);
//             });
//     };
//     const handleAddMorePhotos = () => {
//         const fileInput = document.getElementById("fileInput");
//         fileInput.value = ''; // Clear the file input to allow selecting more files
//         fileInput.click(); // Trigger the file input again
//     };
//     return (
//         <div>
//             <input
//                 type="file"
//                 multiple
//                 accept="image/*"
//                 onChange={handleFileChange}
//                 id="fileInput"
//                 style={{ display: 'none' }}
//             />

//             <button onClick={handleAddMorePhotos}>Add More Photos</button>

//             {selectedFiles.length > 0 && (
//                 <div>
//                     <h2>Selected Files:</h2>
//                     <ul>
//                         {selectedFiles.map((file, index) => (
//                             <li key={index}>
//                                 {file.name} - {file.type}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             )}

//             {imagePreviews.length > 0 && (
//                 <div>
//                     <h2>Image Previews:</h2>
//                     <div className="preview-container">
//                         {imagePreviews.map((preview, index) => (
//                             <img
//                                 key={index}
//                                 src={preview}
//                                 alt={`Preview ${index}`}
//                                 className="image-preview"
//                             />
//                         ))}
//                     </div>
//                 </div>
//             )}

//             {uploadSuccess && <p>Upload successful!</p>}

//             <button onClick={handleUpload}>Upload Images</button>
//         </div>
//     );
// }

// export default Create;
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './create.css';

function Create() {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.getItem('userId')){
            navigate("/login");
        }
    },[])

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const previews = [];

        for (let i = 0; i < files.length; i++) {
            const file = files[i];

            if (file.type.startsWith("image/")) {
                const reader = new FileReader();

                reader.onload = (event) => {
                    const preview = event.target.result;
                    previews.push(preview);

                    if (previews.length === files.length) {
                        setSelectedFiles((prevFiles) => [...prevFiles, ...files]);
                        setImagePreviews((prevPreviews) => [...prevPreviews, ...previews]);
                    }
                };

                reader.readAsDataURL(file);
            }
        }
    };

    const handleUpload = () => {
        const base64Images = imagePreviews.map((preview) => {
            // Remove the data URL prefix to get the base64 data
            return preview.replace(/^data:image\/[a-z]+;base64,/, "");
        });
        const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:5000';

        // Send a POST request to the backend to upload the base64 encoded images
        fetch(backendUrl+"/upload/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: localStorage.getItem("userId"), datatosend: base64Images }), // Send the images directly
        })
            .then((response) => {
                if (response.ok) {
                    setUploadSuccess(true);
                    return response.json();
                } else {
                    setUploadSuccess(false);
                }
            })
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Error uploading images:", error);
                setUploadSuccess(false);
            });
    };

    const handleAddMorePhotos = () => {
        const fileInput = document.getElementById("fileInput");
        fileInput.value = ''; // Clear the file input to allow selecting more files
        fileInput.click(); // Trigger the file input again
    };

    return (
        <div>
            <input
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                id="fileInput"
                style={{ display: 'none' }}
            />

            <button onClick={handleAddMorePhotos}>Add More Photos</button>

            {selectedFiles.length > 0 && (
                <div>
                    <h2>Selected Files:</h2>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>
                                {file.name} - {file.type}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {imagePreviews.length > 0 && (
                <div>
                    <h2>Image Previews:</h2>
                    <div className="preview-container">
                        {imagePreviews.map((preview, index) => (
                            <img
                                key={index}
                                src={preview}
                                alt={`Preview ${index}`}
                                className="image-preview"
                            />
                        ))}
                    </div>
                </div>
            )}

            {uploadSuccess && <p>Upload successful!</p>}

            <button onClick={handleUpload}>Upload Images</button>
        </div>
    );
}

export default Create;
