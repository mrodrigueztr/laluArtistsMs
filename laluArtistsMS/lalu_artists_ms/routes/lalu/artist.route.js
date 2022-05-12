const router = require('express').Router();
const {
    getAllArtist, getArtistByUserName, getArtistByArtistName,
    getArtistAlbumsByArtistName, getArtistSongsByArtistName, getArtistInformationByArtistName,
    getArtistById, getArtistAlbumsByArtistId, getArtistSongsByArtistId, getArtistInformationByArtistId,
    createArtist, updateArtistById, addAlbumToTheArtist, addSongToTheArtist, addInformationToTheArtist,
    deleteAlbumFromArtist, deleteSongFromArtist, deleteInformationFromArtist, deleteArtist
} = require('../../controllers/artist.controller')

router.get('/', getAllArtist);
router.get('/username/:artist_username', getArtistByUserName);
router.get('/artistName/:artist_name', getArtistByArtistName);
router.get('/artistName/:artist_name/albums', getArtistAlbumsByArtistName);
router.get('/artistName/:artist_name/songs', getArtistSongsByArtistName);
router.get('/artistName/:artist_name/information', getArtistInformationByArtistName);
router.get('/:artist_id', getArtistById);
router.get('/:artist_id/albums', getArtistAlbumsByArtistId);
router.get('/:artist_id/songs', getArtistSongsByArtistId);
router.get('/:artist_id/information', getArtistInformationByArtistId);
router.post('/newArtist', createArtist);
router.put('/:artist_id', updateArtistById);
router.put('/:artist_id/updates/albums/:album_id', addAlbumToTheArtist);
router.put('/:artist_id/updates/songs/:song_id', addSongToTheArtist);
router.put('/:artist_id/updates/information/:artist_information', addInformationToTheArtist);
router.put('/:artist_id/delete/albums/:album_id', deleteAlbumFromArtist);
router.put('/:artist_id/delete/songs/:song_id', deleteSongFromArtist);
router.put('/:artist_id/delete/information/:artist_information', deleteInformationFromArtist);
router.delete('/:artist_id', deleteArtist);

module.exports = router;