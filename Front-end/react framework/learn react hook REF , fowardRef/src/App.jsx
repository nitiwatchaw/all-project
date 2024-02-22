import { useRef, useState } from 'react'
import './App.css'
import SelectTextArea from './assets/SelectTextArea'
import SendFile from './SendFile'
function App() {

  const fileRef = useRef(null)
  const selectRef = useRef(null)
  const textarea = useRef(null)
  const [file, setFile] = useState('')


  const onUploadCLick = () => {
    setFile(fileRef.current.value)

    setFile((e) => {
      return [file, ...e]
    })

  }


  const [data, setData] = useState(null)

  const onSelect = () => {
    setData(selectRef.current.value)
  }

  const textAreaAll = () => {
    textarea.current.focus()
    textarea.current.select()
  }


  const [note, setNote] = useState({
    content: '', author: ''
  })

  const [allnote, setAllnote] = useState([])

  function onNoteValueChange(event) {
    const { name, value } = event.target

    setNote((e) => {
      return {
        ...e, [name]: value
      }
    })
  }


  function onNOteSubmit(e) {
    e.preventDefault()
    setAllnote((e) => {
      return (
        [note, ...e]
      )
    })
  }

  const noteElements = allnote.map((e, i) => {
    return (
      <div key={i}>
        <p>{e.content}</p>
      </div>
    )
  })

  return (
    <>
      <section className='app-section'>
        <div className="app-container">
          <h2>Ref</h2>
          <div style={{ backgroundColor: "white", margin: "5px", color: "black" }}><p>{file}</p></div>


          <SendFile onUploadCLick={onUploadCLick} ref={fileRef} />
          <div>

            <br />
            <br />

            <hr />
            <p>{data}</p>


            <select name="cars" id="cars" ref={selectRef}  >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="mercedes">Mercedes</option>
              <option value="audi">Audi</option>
            </select>
            <button onClick={onSelect}>Select press</button>
          </div>
          <hr />

          <SelectTextArea textAreaAll={textAreaAll} ref={textarea} />

        </div>
        <form action="" onSubmit={onNOteSubmit}>

          <input type="text" placeholder='enter' value={note.content} name='content' onChange={onNoteValueChange} />
          <button type='submit'>Press</button>
        </form>
        {noteElements}

      </section >
    </>
  )
}

export default App
