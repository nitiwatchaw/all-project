import Header from './Header'
import Content from './content'
import Content2 from './Content2'
import './App.css'

function App() {


  return (
    <div className='app p-10  dark:bg-slate-600  bg-zinc-100   min-h-screen flex flex-col     gap-10'>
      <Header />
      <Content />
      <Content2 />
    </div>
  )
}

export default App
