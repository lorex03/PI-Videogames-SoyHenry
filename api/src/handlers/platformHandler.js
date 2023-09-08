const {getPlatform} = require ("../controllers/getPlatformController")



const platformHandler=async(req,res) =>{
const{platforms}= req.body;
try {
  const AllPlatforms = await getPlatform(platforms);
   
   res.status(201).json(AllPlatforms)
  }
    
     catch(error){
  res.status(400).json({error:error.message})
   } }

   module.exports={
    platformHandler
   }