import { Outlet } from 'react-router-dom';
import Header from "./components/Header.jsx"
import Footer from './components/Footer.jsx';

function App() {

  const styles = {
    main: {
      flexGrow: "1",
    },
    flexDiv: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    }
  };

  return (
    <>
      <div style={styles.flexDiv}>
        <Header/>
          <main style={styles.main}>
            <Outlet />
          </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
