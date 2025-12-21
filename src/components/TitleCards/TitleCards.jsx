import { useState, useEffect, useRef } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom'

const TitleCards = ({title, category}) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTFkZTJlODA4YTg1NjZhNDViMTBlYWU1YmM1OTcxYyIsIm5iZiI6MTczMDM1NTc1Ny41NTgsInN1YiI6IjY3MjMyMjJkMDAzYzRiNWI1YjY0NDNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7PaNRN7lVEZuseBQWBE63fCnsRa5S8szpQAVKX1K9M'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(data => setApiData(data.results))
      .catch(err => console.error(err));
  }, [])

  useEffect(() => {
    const element = cardsRef.current;

    const handleWheel = (event) => {
      event.preventDefault();
      element.scrollLeft += event.deltaY;
    }

    element.addEventListener('wheel', handleWheel)

    return () => {
      element.removeEventListener('wheel', handleWheel);
    }
  }, []);

  return (
    <div className='title-cards'>
      <h2>{title}</h2>
      <div className='card-list' ref={cardsRef}>
        {apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} key={index} className='card'>
            <img src={"https://image.tmdb.org/t/p/w500" + card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards
