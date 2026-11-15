module.exports=(_req,res)=>res.status(200).json({aiConfigured:!!process.env.OPENROUTER_API_KEY});
