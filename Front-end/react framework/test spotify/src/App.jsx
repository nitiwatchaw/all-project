import { useEffect, useState } from 'react';
import './App.css';
import { fetchData } from './hook/useGetToken';
import Header from './component/Header';
import Collection from './component/Collection';
import Content from './component/Content';

function App() {





  return (
    <div className='grid grid-cols-[30%_1fr] gap-2 p-3 fixed w-full '>
      <div className="flex flex-col ">
        <Header />
        <Collection />

      </div>
      <Content />

    </div>
  );
}

export default App;
