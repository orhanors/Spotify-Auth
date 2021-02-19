const deezerRouter = require("express").Router();
const {
	searchResult,
	artistInfo,
	tracklist,
} = require("../../controllers/deezerController");
const { validateToken } = require("../../middlewares/auth");

deezerRouter.post("/search", validateToken, searchResult);
deezerRouter.get("/artist/:artistName", validateToken, artistInfo);
deezerRouter.get("/artist/tracklist/:artistId", validateToken, tracklist);

module.exports = deezerRouter;
