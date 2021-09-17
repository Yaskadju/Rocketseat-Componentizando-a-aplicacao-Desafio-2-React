import { useState } from "react"
import { Star, Clock } from "react-feather"
import "../styles/movie-card.scss"
import { MovieModal } from "./MovieModal"

interface MovieCardProps {
  title: string
  poster: string
  rating: Array<{ Source: string; Value: string }>
  runtime: string
  plot: string
}

export function MovieCard(props: MovieCardProps) {
  const [isMovieModalOpen, setIsMovieModalOpen] = useState(false)

  function handleCloseMovieModal() {
    setIsMovieModalOpen(false)
  }

  function handleOpenMovieModal() {
    setIsMovieModalOpen(true)
  }

  return (
    <>
      <div className="movie-card" onClick={handleOpenMovieModal}>
        <img src={props.poster} alt={props.title} />

        <div>
          <div className="movie-info">
            <span>{props.title}</span>
            <div className="meta">
              <div>
                <Star /> {props.rating[0].Value}
              </div>

              <div>
                <Clock /> {props.runtime}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MovieModal
        isOpen={isMovieModalOpen}
        onRequestClose={handleCloseMovieModal}
        title={props.title}
        poster={props.poster}
        rating={props.rating}
        runtime={props.runtime}
        plot={props.plot}
      />
    </>
  )
}
