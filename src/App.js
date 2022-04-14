import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import UserTable from "./components/userTable";
import UserPage from './components/userPage';
import AlbumsPage from './components/albumPage';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<UserTable />}/>
        <Route path = "userPage" element = {<UserPage />}>
          <Route path = ":id" element = {<UserPage />} />
        </Route>
        <Route path = "userPage/albums/:id" element = {<AlbumsPage />}/>
        <Route path = "*" element = {<UserTable />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
