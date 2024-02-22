import { FC } from 'react'
import { SeriesProps } from '../interfaces/SeriresProps'
import '../App.css'

const List: FC<SeriesProps> = ({ seriesList }) => {
    return (

        <div className="series-list">
            {seriesList.map((series, idx) => {
                return (
                    <div key={idx} className="series-item">
                        <img src={series.cover} alt="Series-cover" />
                        <p><b>Name: {series.name}</b></p>
                        <p>Gerne :{series.genre}</p>
                        <p>Seasons: {series.seasons}</p>
                        <p>IMDB: {series.imdb}</p>
                    </div>
                )
            })}
        </div>

    )
}

export default List