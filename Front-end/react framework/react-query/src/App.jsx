import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Homepage } from './components/Homepage'
import { Superhero } from './components/Superheros'
import { RQSuperheros } from './components/RQSuperheros'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RQSuperhero } from './components/RQSuperhero'
import { ParallelQueriesPage } from './components/ParallelQueries.page'
import { DynamicParallelPage } from './components/DynamicParaller.page'
import { NavLink, Routes, Route } from 'react-router-dom'
import { PaginatedQueries } from './components/PaginatedQuries.page'
import { DependentQueries } from './components/DependentQueries.page'
import { InfiniteQueries } from './components/InfiniteQueries.page'
import './App.css'



const App = () => {


  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/Superhero'>Default Fetch</NavLink></li>
          <li><NavLink to='/RQSuperheros'>RQSuperheros</NavLink></li>
          <li><NavLink to='/rq-parallel'>ParallelQueriesPage</NavLink></li>
          <li><NavLink to='/rq-dependent'>DependentQueries (ส่งค่าด้วย)</NavLink></li>
          <li><NavLink to='/PaginatedQueries'>PaginatedQueries</NavLink></li>
          <li><NavLink to='/InfiniteQueries'>InfiniteQueries</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Superhero' element={<Superhero />} />
        <Route path='/RQSuperheros' element={<RQSuperheros />} />


        <Route path='/rq-super-heros/:heroId' element={<RQSuperhero />} />

        <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
        <Route path='/rq-dynamic-parallel' element={<DynamicParallelPage heroIds={[1, 3]} />} />


        {/* email คือค่าที่ส่งไป เพื่อแสดงผลข้อมูลของค่านั้นๆใน ส่วนของ channels */}
        <Route path='/rq-dependent' element={<DependentQueries email='thai@example.com' />} />

        <Route path='/PaginatedQueries' element={<PaginatedQueries />} />
        <Route path='/InfiniteQueries' element={<InfiniteQueries />} />
      </Routes>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
