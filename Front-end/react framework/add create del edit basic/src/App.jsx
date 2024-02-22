

import './App.css'
import CRUD from './basic/CRUD';
import CRUDL from './localstorage/CRUD';
function App() {


  return (
    <div className='container' >

      {/* basic */}
      <CRUD />

      {/* localstorage */}
      <h1 style={{ margin: "0 auto" }}>Local storage CRUD</h1>

      <CRUDL />
    </div>

  )
}


export default App

