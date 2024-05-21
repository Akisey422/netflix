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
// app.delete("/movie.delete", (req, res) => {
//   return res.status(200).send({});
// });

//!network port and server
const PORT = 8001;
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
