import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';

function App() {

  const styles = {
    main: {
    },
  };

  return (
    <>
      <Header/>
        <main style={styles.main}>
          <Outlet />
        </main>
      <Footer/>
    </>
  )
}

export default App
