import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Header from './components/Header';


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              {/* <Header/> */}
              <UserList />
            </>
          }></Route>
          <Route path="add" element={<AddUser/>}></Route>
          <Route path="edit/:id" element={<EditUser/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App
