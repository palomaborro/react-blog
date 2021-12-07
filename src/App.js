import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import NavBar from './components/navBar/NavBar';
import RegisterPage from './components/registerPage/RegisterPage';
import SettingsPage from './components/settingsPage/SettingsPage';
import SinglePostPage from './components/singlePostPage/SinglePostPage';
import WritePage from './components/writePage/WritePage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<HomePage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/settings' element={<SettingsPage/>}/>
        <Route path='/post/:postId' element={<SinglePostPage/>}/>
        <Route path='/write' element={<WritePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
