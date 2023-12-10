const mongoose = require('mongoose');
const imageSchema = require('../models/picturemodels'); // Import your Image model

const uploadImage = async (req, res, next) => {
  console.log(req.body)
  try {
    // Extract the user ID from the request, assuming it's available
    const { userId } = req.body;

    // Extract the array of base64-encoded images
    const data = req.body.datatosend;

    // Create an array to store image documents
    // const imageDocuments = [];

    // Iterate through the images and create Image documents
    // for (const imageData of data) {
    //   const image = new imageSchema({
    //     userId,
    //     images: [{ data: imageData }], // Set the content type as needed
    //   });
    //   imageDocuments.push(image);
    // }

    // Save all the image documents in a single operation
    const imagedata = await new imageSchema({userId, images:data});

    imagedata.save();
    res.json({ success: "Images saved successfully", imagedata });

  } catch (error) {
    console.error("Error saving images:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const allUserImages = async (req,res,next)=>{
  // console.log(req.body.userId);
    try{
        const alldata = await imageSchema.find({userId: req.body.userId});
        // console.log(alldata)
        res.status(200).json(alldata);
    }catch{
        res.status(500);
    }
}

const alldata = async (req,res,next)=>{
  try{
      const alldata = await imageSchema.find();
      res.json(alldata);
  }catch{
      res.status(500);            
  }
}
const deletealldata = async(req,res,next)=>{
  try{
      const deletealldata = await imageSchema.deleteMany();
      res.send("Data Deleted");
  }catch{
      res.status(500);
  }
}





module.exports =  {uploadImage,alldata,deletealldata,allUserImages};

