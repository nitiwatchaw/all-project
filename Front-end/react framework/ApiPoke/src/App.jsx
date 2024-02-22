import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import FavPoke from './component/FavPoke'
function App() {
  const [poke, setPoke] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [number, setNumber] = useState(1)

  const [isButtonDisabled, setButtonDisabled] = useState(false);
  const [fav, setFav] = useState([])


  useEffect(() => {
    let abortController = new AbortController(); //cancle request

    const loadPoke = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`, { signal: abortController.signal });
        console.log(poke)
        setPoke(res.data)
        setError("")
      }
      catch (error) {
        setError("Something went wrong ", error)
      }
      finally {
        setLoading(false);
      }
    }
    loadPoke()
    if (number === 1) {
      setButtonDisabled(true)
    } else {
      setButtonDisabled(false)
    }

    return () => abortController.abort();

  }, [number])


  const prevPoke = () => {
    setNumber((number) => number - 1)
  }
  const nextPoke = () => {
    setNumber((number) => number + 1)
  }


  const addFav = () => {
    const newPoke = { ...poke }
    newPoke.id = Date.now().toString()
    setFav((prevState) => [...prevState, newPoke])
    console.log("fav", fav)

  }

  const del = (pokeID) => {
    setFav((prevState) => {
      return prevState.filter(e => e.id !== pokeID)
    })
  }


  return (
    <div className='container'>
      <div className="left">
        <div className="head">
          <h1>{poke?.name}</h1>
          <button onClick={addFav} >Add to Favourite</button>

        </div>
        {loading ? <h2>Loading</h2> :
          <div className="content">
            <img src={poke?.sprites?.other?.home?.front_default} alt={poke?.name} />
            <div className="wrap-btn flex ">
              <button disabled={isButtonDisabled} onClick={prevPoke}>Prev</button>
              <button onClick={nextPoke}>Next</button>
            </div>



            {`Poke number: ${number}`}
            <ul>
              {poke?.abilities?.map((e, idx) => {
                return (
                  <li key={idx}>
                    Ablity: {e?.ability?.name}
                  </li>
                )
              })}
            </ul>
          </div>}

      </div>
      <div className='right'>
        {fav.length == 0 ? "No Fav Pokemon" : <FavPoke fav={fav} del={del} />}
      </div>
    </div>


  )
}

export default App
