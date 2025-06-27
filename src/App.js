import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import FrontPage from './FrontPage';

function App() {
  return (
    <div className=" App min-h-screen bg-black text-white">
     <Navbar />
     <FrontPage />
     <Footer />
    </div>
  );
}

export default App;
