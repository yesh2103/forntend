
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <Login/>
    <SignUp/>
    <Header/>
    <Footer/>
    </div>
  );
}

export default App;