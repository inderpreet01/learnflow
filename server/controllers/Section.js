const Section=require("../models/Section");
const  Course=require("../models/Course");

exports.createSection=async(req,res)=>{
    try{
        //data fetch
        const {sectionName,courseId}=req.body;
        //data validation
        if(!sectionName || !courseId){
            return res.status(400).json({
                success:false,
                message:"All fields are required"
            })
        }
        //create section
        const newSection= await Section.create({sectionName});
        //update course with section objectid
        const updatedCourse = await Course.findByIdAndUpdate(
            courseId,
            {
              $push: {
                courseContent: newSection._id,
              },
            },
            { new: true }
          )
            .populate({
              path: "courseContent",
              populate: {
                path: "subSection",
              },
            })
            .exec()

        //return response
     res.status(200).json({
      success: true,
      message: "Section created successfully",
      updatedCourse,
    })
  } 
  catch (error) {
    // Handle errors
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    })
  }
}

// UPDATE a section
exports.updateSection = async (req, res) => {
    try {
      const { sectionName, sectionId,courseId} = req.body
      //validation
      if(!sectionName || !sectionId){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        })
    }
    //update data
      const section = await Section.findByIdAndUpdate(
        sectionId,
        { sectionName },
        { new: true }
      )
      const course = await Course.findById(courseId)
        .populate({
          path: "courseContent",
          populate: {
            path: "subSection",
          },
        })
        .exec()
      console.log(course)

    //return res
      res.status(200).json({
        success: true,
        message: "Section updated Successfully",section,
         data: course,
      })
    } catch (error) {
      console.error("Error updating section:", error)
      res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
  
  // DELETE a section
  exports.deleteSection = async (req, res) => {
    try {
      const { sectionId } = req.params;

      await Section.findByIdAndDelete(sectionId);

      res.status(200).json({
        success: true,
        message: "Section deleted successfully",
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Internal server error",
        error: error.message,
      })
    }
  }
  