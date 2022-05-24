const User = require("../models/User");

const addUser =  async (req,res)=>{
    const {fullname,email,number,country,region,city,address,zip} = req.body;
    const u = await new User({fullname,email,number,country,region,city,address,zip});
    u.save();
    res.redirect('/all');
}

const showAll= async (req,res)=>{
    const u = await User.find()
    console.log(u);
    res.render('all',{u})
}

const delUser= async (req,res)=>{
    const {id}= req.params;
    await User.findByIdAndDelete(id);
    res.redirect('/all');
}

const updateUser = async (req,res)=>{
    const {id}= req.params;
    await User.findByIdAndUpdate(id,req.body);
    res.redirect('/all');}


module.exports={addUser,showAll,delUser};