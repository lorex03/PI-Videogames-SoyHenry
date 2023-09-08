const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter= require('./VideogamesRouters')
const genreRouter= require('./GenreRouter')
const platformRouter= require('./PlatformRouter')
const router = Router();

router.use('/videogames',videogamesRouter)

router.use('/genres',genreRouter)

router.use('/platforms',platformRouter)


//router.use('/ge',videogameRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
