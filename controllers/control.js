const User=require("../models/mode")
const renderhome=(req,res)=>{
    User.find().then((users)=>{
        res.render("first",{users:users});
    })
}
const addname=(req,res)=>{
  const  newuser=new User({
        name:req.body.name,
        file:req.file.filename,
    })

newuser.save().then((result)=>{
    res.redirect("/")
})
}
module.exports={renderhome,addname}