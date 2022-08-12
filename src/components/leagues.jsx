import React from "react";
import { recieveLeagues } from "../redux/teams";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Team from "./team";

function Leagues () {
  const leagueList = useSelector(state => state);
  let teamsList = [];
  if(leagueList.length !== 0)  teamsList = leagueList[0].teams;
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(recieveLeagues());
  }, []);
  console.log('leagueList =', leagueList);
  console.log('teamsList =', teamsList);

  return (
    <section>
      <div className="navigator">
        {leagueList.map((item) => (
          <button>
          <img  src={item.logo} style={ { width: '50px', height: '60px' } } alt="League logo"/>
        </button>
        ))}
      </div>
      
      <div>
        {teamsList.map((team) => (
          <Team key={team.id} id={team.id} name={team.name} details={team.details}
        founded={team.founded} logo={team.logo} />
        ))}
      </div>
    </section>
  );
}

export default Leagues;
