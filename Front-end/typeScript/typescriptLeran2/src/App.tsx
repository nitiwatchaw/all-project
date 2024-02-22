import { useState } from 'react'
import { SeriesProps } from './interfaces/SeriresProps'
import List from './components/List'
import Form from './components/Form'
import './App.css'

function App() {

  const [seriesList, setSeriesList] = useState<SeriesProps["seriesList"]>([])

  return (
    <>
      <h1 >favourite TV series</h1>
      <Form seriesList={seriesList} setSeriesList={setSeriesList} />
      <List seriesList={seriesList} />

    </>
  )
}

export default App
