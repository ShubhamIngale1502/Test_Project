import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Add_Task from './components/Add_Task';
import Show_Task from './components/Show_Task';
import Edit_Task from './components/Edit_Task';
import Delete_Task from './components/Delete_Task';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/add' element={<Add_Task/>}/>
        <Route path='/show' element={<Show_Task/>}/>
        <Route path='/student/edit/:stuId' element={<Edit_Task/>}/>
        <Route path='/student/delete/:stuId' element={<Delete_Task/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
