import axios from "axios"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export default function Movies(){
    const nav=useNavigate()
    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9968b25d79351ab3309007cafe34fc7e').then((res) => {
            setmovies(res.data.results)
            // console.log(res.data)

        }).catch((err) => {
            console.log(err)


        })
    },[])

    return <>
    <Row xs={2} md={4} lg={4} className="g-4">
      {movies.map((movie) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            <Card.Body>
              <Card.Title>{movie.original_title}</Card.Title>
              <Card.Text>
                {movie.overview}
              </Card.Text>
            </Card.Body>
            <button className="btn btn-primary" onClick={()=>{
                nav(`/moviedetails/${movie.id}`)

            }}> details</button>

          </Card>
        </Col>
      ))}
    </Row>

        
            

    </>

}