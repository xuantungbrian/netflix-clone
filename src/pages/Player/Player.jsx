import React, { useEffect } from 'react'
import './Player.css'
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = React.useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NTFkZTJlODA4YTg1NjZhNDViMTBlYWU1YmM1OTcxYyIsIm5iZiI6MTczMDM1NTc1Ny41NTgsInN1YiI6IjY3MjMyMjJkMDAzYzRiNWI1YjY0NDNiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.o7PaNRN7lVEZuseBQWBE63fCnsRa5S8szpQAVKX1K9M'
      }
    };

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results[0]))
      .catch(err => console.error('error:' + err));
  }, [])

  return (
    <div className='player'>
      <img src={backArrowIcon} onClick={() => {navigate(-2)}}/>
      <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} title="trailer" frameBorder="0" allowFullScreen></iframe>
      <div className='player-info'>
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
