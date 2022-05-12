const Artist = require('../models/artist.model');

getAllArtist = async (req, res) => {
    try {
        const artist = await Artist.find();
        return res.json({ msage: 'Artistas Encontrados', data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistByUserName = async (req, res) => {
    try {
        const artist = await Artist.find({ artist_username: req.params.artist_username });
        return res.json({ msage: `Artista Encontrado `, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistByArtistName = async (req, res) => {
    try {
        const artist = await Artist.find({ artist_name: req.params.artist_name });
        return res.json({ msage: `Artista Encontrado `, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistAlbumsByArtistName = async (req, res) => {
    try {
        const artist = await Artist.findOne({
            artist_name: req.params.artist_name,
        });
        return res.json({ msage: `Albumes del artista encontrados`, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistSongsByArtistName = async (req, res) => {
    try {
        const artist = await Artist.findOne({
            artist_name: req.params.artist_name,
        });
        return res.json({ msage: `Canciones del artista encontrados`, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistInformationByArtistName = async (req, res) => {
    try {
        const artist = await Artist.findOne({
            artist_name: req.params.artist_name,
        });
        return res.json({ msage: `Informacion del artista encontrados`, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistById = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({ msage: `Artista  ${artist.artist_name} encontrado`, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistAlbumsByArtistId = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({ msage: `Albumes del artista ${artist.artist_name} encontrados`, data: artist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistSongsByArtistId = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({ msage: `Canciones del artista ${artist.artist_name} encontradas`, data: artist });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

getArtistInformationByArtistId = async (req, res) => {
    try {
        const artist = await Artist.findById(req.params.artist_id);
        return res.json({ msage: `Informacion adicional del artista ${artist.artist_name} encontrados`, data: artist });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

createArtist = async (req, res) => {
    req.body.artist_albums = []
    req.body.artist_songs = []
    req.body.artist_contact_information = []
    try {
        const newArtist = await Artist.create(req.body);
        return res.json({ msage: `Artista ${newArtist.artist_name} creado`, data: newArtist });
    } catch (error) {
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

updateArtistById = async (req, res) => {
    try {
        const artistEdit = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            req.body,
            { new: true }
        );
        return res.json({ msage: `Artista actualizado`, data: artistEdit })
    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

addAlbumToTheArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        artist.artist_albums.push(req.params.album_id)
        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Album Agregado a la lista de albumes', data: newArtist })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

addSongToTheArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        artist.artist_songs.push(req.params.song_id)
        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Cancion Agregada a la lista de canciones', data: newArtist })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

addInformationToTheArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        artist.artist_contact_information.push(req.params.artist_information)
        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Informacion Agregada a la informacion de contacto del artista ', data: newArtist })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

deleteAlbumFromArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        const index = artist.artist_albums.indexOf(req.params.album_id);
        if (index !== -1) { artist.artist_albums.splice(index, 1) }

        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Album Eliminado de la lista de albumes', data: newArtist })

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

deleteSongFromArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        const index = artist.artist_songs.indexOf(req.params.song_id);
        if (index !== -1) { artist.artist_songs.splice(index, 1) }

        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Cancion Eliminada de la lista de Canciones', data: newArtist })

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

deleteInformationFromArtist = async (req, res) => {
    try {
        const artist = await Artist.findById(
            req.params.artist_id,
        );
        const index = artist.artist_contact_information.indexOf(req.params.artist_information);
        if (index !== -1) { artist.artist_contact_information.splice(index, 1) }

        const newArtist = await Artist.findByIdAndUpdate(
            req.params.artist_id,
            artist,
            { new: true }
        )
        return res.json({ msage: 'Informacion Eliminada de la lista de informacion', data: newArtist })

    } catch (error) {
        res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

deleteArtist = async (req, res) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.artist_id);
        return res.json({ msage: `Artista Eliminado`, data: artist });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Ha ocurrido un error' });
    }
};

module.exports = {
    getAllArtist, getArtistByUserName, getArtistByArtistName,
    getArtistAlbumsByArtistName, getArtistSongsByArtistName, getArtistInformationByArtistName,
    getArtistById, getArtistAlbumsByArtistId, getArtistSongsByArtistId, getArtistInformationByArtistId,
    createArtist, updateArtistById, addAlbumToTheArtist, addSongToTheArtist, addInformationToTheArtist,
    deleteAlbumFromArtist, deleteSongFromArtist, deleteInformationFromArtist, deleteArtist
};