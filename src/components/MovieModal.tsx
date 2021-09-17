import { Star } from "react-feather"
import Modal from "react-modal"
import "../styles/movie-modal.scss"

interface MovieModalProps {
  isOpen: boolean
  title: string
  poster: string
  rating: Array<{ Source: string; Value: string }>
  runtime: string
  plot: string
  onRequestClose: () => void
}

export function MovieModal({
  isOpen,
  onRequestClose,
  title,
  poster,
  rating,
  plot
}: MovieModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <img src={poster} alt={title} />
      <div className="content">
        <h2>{title}</h2>
        {rating.map(rating => {
          return (
            <div>
              {rating.Source} - <Star /> {rating.Value}
            </div>
          )
        })}
        <p>Plot: {plot}</p>
      </div>
    </Modal>
  )
}
