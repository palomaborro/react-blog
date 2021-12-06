import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import NavBar from './components/navBar/NavBar';
import RegisterPage from './components/registerPage/RegisterPage';
import SettingsPage from './components/settingsPage/SettingsPage';
import SinglePostPage from './components/singlePostPage/SinglePostPage';
import WritePage from './components/writePage/WritePage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <RegisterPage />
    </div>
  );
}

export default App;
