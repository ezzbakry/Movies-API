import axios from "axios"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
// import axiosInstance from "../../AxiosConfig/AxiosConfig";
import { useSelector, useDispatch } from "react-redux"
import store from "../../store/store";
import { changeload } from '../../store/slices/loader'
import { PacmanLoader } from 'react-spinners'



export default function Movies() {
  const load = useSelector((state) => state.load.load)
  const nav = useNavigate()
  const [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=9968b25d79351ab3309007cafe34fc7e').then((res) => {
      setmovies(res.data.results)
      // console.log(res.data)

    }).catch((err) => {
      console.log(err)


    })
  }, [])
  axios.interceptors.request.use((config) => {
    store.dispatch(changeload(true))
    return config

  }, (err) => {
    return Promise.reject(err)
  })
  axios.interceptors.response.use((res) => {
    store.dispatch(changeload(false))


    return res
  }, (err) => {
    return Promise.reject(err)

  })

  return <>
    {(load) ? <div className="d-flex justify-content-around">
      {/* <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      <PacmanLoader size={66} /></div> : <Row xs={2} md={4} lg={4} className="g-4">
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
            <button className="btn btn-primary" onClick={() => {
              nav(`/moviedetails/${movie.id}`)

            }}> details</button>

          </Card>
        </Col>
      ))}
    </Row>}





  </>

}