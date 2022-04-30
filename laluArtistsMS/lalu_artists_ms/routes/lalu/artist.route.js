const router = require('express').Router();
const Artist = require('../../models/artist.model');

router.get('/', async(req,res) => {
    try {
        const artist = await Artist.find();
         return res.json({msage : 'Artistas Encontrados',data : artist });
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.get('/:artist_id', async(req,res) => {
    try {
        
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({msage : `Artista  ${artist.artist_name} encontrado`,data : artist} );
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.get('/:artist_id/albums', async(req,res) => {
    try {
        
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({msage : `álbumes del artista ${artist.artist_name}`,data : artist.artist_albums});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.get('/:artist_id/songs', async(req,res) => {
    try {
        
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({msage : `Canciones del artista ${artist.artist_name}`,data : artist.artist_songs});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.get('/:artist_id/information', async(req,res) => {
    try {
        
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({msage : `Informacion adicional del artista ${artist.artist_name}`,data : artist.artist_contact_information});
    } catch (error) {
        console.log(error);
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.post('/', async (req,res) => {
    try {
        const newArtist =  await Artist.create(req.body);
        return res.json({msage : `Artista ${newArtist.artist_name} creado`,data : newArtist});
    } catch (error) {
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.put('/:artist_id', async (req,res) => {
    try {
        const artistEdit = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            req.body,
            { new : true}
        );
        return res.json({msage : `Artista actualizado`,data : artistEdit})

    } catch (error) {
        res.status(500).json({error : 'Ha ocurrido un error'});
    }
});

router.delete('/:artist_id', async (req,res) =>{
    try {
        const artist = await Artist.findByIdAndDelete(req.params.artist_id);
        return res.json({msage : `Artista Eliminado`,data : artist}); 
    } catch (error) {
        return res.status(500).json({error : 'Ha ocurrido un error'});
    }
})

module.exports = router;