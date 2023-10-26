
import './App.css';
import Cards from './Cards';
import Header from './Header';
import Logo from './Logo';
import Body from './body';
import Footer from './footer';
import NewArrivals from './newArrivals';

function App() {
  return (
    <>
    <div className='cd'>
      <div className='cg'>
    <Header />
    <Body/>
    </div>
    </div>
    <Cards />
    <NewArrivals />
    <Logo />
    <Footer />
    </>
  );
}

export default App;
