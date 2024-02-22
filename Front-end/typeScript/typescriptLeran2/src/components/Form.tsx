import { FC, ChangeEvent, useState, Dispatch } from 'react'
import { SeriesProps } from '../interfaces/SeriresProps'

interface Props {
    seriesList: SeriesProps["seriesList"],
    setSeriesList: Dispatch<SeriesProps['seriesList']>

}

const Form: FC<Props> = ({ seriesList, setSeriesList }) => {

    const [name, setName] = useState("")
    const [genre, setGenre] = useState("")
    const [cover, setCover] = useState("")
    const [imdb, setImdb] = useState<SeriesProps | any>()
    const [seasons, setSeasons] = useState<SeriesProps | any>()


    const setNameinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value)
    }
    const setGenreinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setGenre(event.target.value)
    }
    const setCoverinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCover(event.target.value)
    }
    const setImdbinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setImdb(event.target.value)
    }
    const setSeasonsinputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSeasons(event.target.value)
    }

    const handleClick = () => {
        if (name.trim() === "" || genre.trim() === "" || cover.trim() === "" || imdb.trim() === "" || seasons.trim() === "") {
            alert("Please enter series info!")
            return;
        }


        const seriesData = { name, genre, cover, imdb, seasons }
        setSeriesList([...seriesList, seriesData])
        setName("")
        setGenre("")
        setCover("")
        setImdb("")
        setSeasons("")
    }

    return (
        <>
            <h1>Form</h1>
            <div className="form-container">
                <div className="form-div">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' value={name} onChange={setNameinputHandler} />
                </div>
                <div className="form-div">
                    <label htmlFor="name">Genre</label>
                    <input type="text" name='genre' value={genre} onChange={setGenreinputHandler} />
                </div>
                <div className="form-div">
                    <label htmlFor="name">Cover</label>
                    <input type="text" name='cover' value={cover} onChange={setCoverinputHandler} />
                </div>
                <div className="form-div">
                    <label htmlFor="name">IMDB</label>
                    <input type="text" name='imdb' value={imdb} onChange={setImdbinputHandler} />
                </div>
                <div className="form-div">
                    <label htmlFor="name">Seasons</label>
                    <input type="text" name='seasons' value={seasons} onChange={setSeasonsinputHandler} />
                </div>
                <button type='button' onClick={handleClick}>Add Sereies</button>
            </div>
        </>
    )
}

export default Form