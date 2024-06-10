const mongoose=require("mongoose");
const mailSender = require("../utils/mailSender");
const otpTemplate = require("../mail/templates/emailVerificationTemplate");

const OTPSchema=new mongoose.Schema({ 
    email:{
        type:String,
        required:true
    },
    otp:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        defaukt:Date.now(),
        expires:5*60
    }
})

//function to send email
async function sendVerificationEmail(email,otp){
    try{
        const mailResponse=await mailSender(email,"Verification Email from LearnFlow",otpTemplate(otp))
        console.log("Email send successfully",mailResponse)
    }
    catch(error){
        console.log("error occured while sending mails:",error);
        throw error;
    }
}

OTPSchema.pre('save',async function(next){
    await sendVerificationEmail(this.email,this.otp);
    next();
})

module.exports=mongoose.model("OTP",OTPSchema);