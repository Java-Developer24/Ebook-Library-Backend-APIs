import express from 'express'

const app =express();

app.get("/",(req,res,next)=>{
    res.json({message:"Welcome to Elib API's"});
    next();
    
});

export default app;