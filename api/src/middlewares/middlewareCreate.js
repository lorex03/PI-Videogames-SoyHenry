const validate = (req,res,next) => {
    const{ name, released,rating,background_image,genres,platforms}= req.body;
    if (!name) return res.status(400).json({error:"Missing name"    })
    if (!released) return res.status(400).json({error:"Missing released "})
    if (!rating) return res.status(400).json({error:"Missing rating "   })
    if (!background_image) return res.status(400).json({error:"Missing background_image "})
    if (!genres) return res.status(400).json({error:"Missing genres" })
    if (!platforms) return res.status(400).json({error:"Missing platforms"  })
    
    
    next();
    }
    module.exports = {validate}