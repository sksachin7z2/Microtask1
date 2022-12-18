const {db} =require('../db'); //dummy database
const router=require('express').Router();

router.post('/usercreate',async(req,res)=>{
    const {userName,name,email,phone,city}=req.body;
    if(!userName){
        return res.send("userName is required")
    }
    try {
       const isexist=db.find(e=>e.userName==userName);
      
       if(isexist){
       return res.status(400).json({"status":"username already exists"});
       }
       const user={
        userName,name,email,phone,city
       }
       db.push(user);
      return res.status(200).json({"status":"userinfo added",user});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.post('/getuser',async(req,res)=>{
    const {userName}=req.body;
    try {
       const user=db.find(e=>e.userName==userName);
       if(!user){
       return res.status(400).json({"status":"user not exists"});
       }
      return res.status(200).json({"status":"userinfo",user});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.delete('/remove/:user',async(req,res)=>{
const user=req.params.user;
try {
    const useri=db.find(e=>e.userName==user);
    if(!useri){
        return res.status(400).json({"status":"user not exists"});
    }
    const index=db.findIndex((e)=>{
        return e.userName===user;
     })
     if(index!==-1){
          db.splice(index,1)[0];
     }
     return res.status(200).json({"status":"user removed",useri});
} catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
}
})
router.get('/getall',async(req,res)=>{
    const users=db;
    try {
        if(db.length===0)
    return res.json({"status":"database empty"});

    return res.json({users});
    } catch (error) {
        console.log(error);
    res.status(500).send("Internal Server Error");
    }
    
})
router.put('/update/:user',async(req,res)=>{
    const user=req.params.user;
    const {userName,name,email,phone,city}=req.body;
    const scheme={userName:userName,name:name,email:email,phone:phone,city:city}
    try {
        const useri=db.find(e=>e.userName==user);
        if(!useri){
            return res.status(400).json({"status":"user not exists"});
        }
        const index=db.findIndex((e)=>{
            return e.userName===user;
         })
         for (const key in db[index]) {
                db[index][key]=scheme[key]?scheme[key]:db[index][key];
        }
        return res.status(200).json({"status":"updated",user:db[index]})
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
})
router.delete('/removeall',async(req,res)=>{
    
    try {
      db.splice(0,db.length);
         return res.status(200).json({"status":"database clear"});
    } catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
    })
module.exports=router