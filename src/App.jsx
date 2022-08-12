// import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Leagues from './components/leagues';
import "bootstrap/dist/css/bootstrap.css";

function App() {

  return (
    <div>
      <Header />
      <main>
        <Leagues />
        {/* <Routes>
          <Route path="/" element={<Rocket />} />
          <Route path="/" element={< />} />
          <Route path="/" element={< />} />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;