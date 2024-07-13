import './App.css'
import AboutSection from './components/About';
import Home from './components/Home';
import Footer from './components/includes/Footer';
import Header from './components/includes/Header';
import User from './components/PropsWork/User';
import UserTable from './components/PropsWork/UserTable';
const App = () => {
  
  return (
    <>
     <Header />
      <Home />
      <AboutSection />
      <User />
      <hr /> 
      <UserTable />
     <Footer />
    </>
  );
};

export default App;
