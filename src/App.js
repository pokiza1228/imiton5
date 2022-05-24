import { Route, Routes } from 'react-router-dom';
import { createContext, useEffect, useState } from 'react';
import Main from './screans/main/main';
import Feedback from './screans/feedback/feedback';
import Add from './screans/add/add';
import Edit from './screans/edit/edit';
export const ProductContext = createContext();


function App() {

  const [ posts, setPosts ] = useState();
  useEffect(()=>{
      fetch('/data.json')
    .then(response => response.json())
    .then(data => setPosts(data))
  },[]);

  if (!posts) {
    return null
}

  return (
    <ProductContext.Provider value={{posts, setPosts}}>
     <Routes>
      <Route path="/" element={<Main /> }/>
      <Route path="/feedback/:id" element={<Feedback />}/>
      <Route path='/add' element={<Add />}/>
      <Route path='/edit/:id' element={<Edit />}/>
    </Routes>
    </ProductContext.Provider>
  );
}

export default App;
