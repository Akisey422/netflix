import express from "express";
const app = express();
//to make app understand json
app.use(express.json());

//routes
app.get(`/say-hello`, (req, res) => {
  return res.status(200).send(`Hello`);
});

let movieList = [];
//! add movie
app.post(`/movie/add`, (req, res) => {
  //extract movie from  req.body
  const newMovie = req.body;
  //add new movie to movie list
  //console.log(req.body);
  movieList.push(newMovie);
  //sed response
  return res.status(200).send({ message: "Movie is added successfully...." });
});

//! get movie
app.get("/movie/list", (req, res) => {
  return res.status(200).send({ message: "success", movies: movieList });
});

//! delete
app.delete("/movie.delete", (req, res) => {
  const movieToBeDeleted = req.body.name;
  const requiredMovie = movieList.find((item) => {
    if (item.name === movieToBeDeleted) return item;
  });
  if (!requiredMovie)
    return res.status(404).send({ message: "Movie does ot exist!" });
});
const newMovieList = movieList.filter((item, index, array) => {
  if (item.name !== movieToBeDeleted) return item;
  movieList = structuredClone(newMovieList);

  //   send response
  return res.status(200).send({ message: "Movie is deleted successfully," });
});

//!network port and server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
