import HomePage from './components/homePage/HomePage';
import NavBar from './components/navBar/NavBar';
import SettingsPage from './components/settingsPage/SettingsPage';
import SinglePostPage from './components/singlePostPage/SinglePostPage';
import WritePage from './components/writePage/WritePage';


function App() {
  return (
    <div className="App">
      <NavBar />
      <SettingsPage />
    </div>
  );
}

export default App;
