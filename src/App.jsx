import { Routes, Route } from 'react-router-dom';
import Header from "./components/header";
import Leagues from './components/leagues';
import { recieveLeagues } from "./redux/teams";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const leagueList = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(recieveLeagues());
  }, []);

    // if (leagueList.length < 1){
    // }

    console.log('at app', leagueList);

  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Leagues />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;