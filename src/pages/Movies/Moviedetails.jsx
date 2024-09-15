import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
// import axiosInstance from "../../AxiosConfig/AxiosConfig";


export default function Moviedetails() {
  const { id } = useParams()
  const [movie, setmovie] = useState([])
  useEffect(() => {
    async function getmoviebyID() {
      try {
        const res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=9968b25d79351ab3309007cafe34fc7e`)

        const Movie = res.data.results.find((movie) => movie.id == id);
        setmovie(Movie)
        console.log(movie)
      } catch (err) {
        console.log(err)
      }

    }
    getmoviebyID()
  })
  return <>
    <Card style={{ width: "200px", height: "300px", margin: "auto", top: "0" }}>
      <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
      <Card.Body>
        <Card.Title>{movie.original_title}</Card.Title>
        <Card.Text>
          {movie.overview}
        </Card.Text>
      </Card.Body>
    </Card>
  </>

}