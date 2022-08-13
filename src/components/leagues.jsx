import React from "react";
import { useState } from 'react';
import Team from "./team";

function Leagues (leagues) {
  const leagueList = leagues.leagues;
  const [teamsList, setTeamsList] = useState(leagueList.filter((item) => item.id === '423e4faa-4c4b-4cf2-b1e9-03e8e5cace1f')[0].teams);

  console.log('leagueList =', leagueList);
  console.log('teamsList =', teamsList);

  const chooseLeague = (id) => {
    setTeamsList(() => leagueList.filter((item) => item.id === id)[0].teams)
    console.log('changed to', teamsList);
  }

  return (
    <section>
      <div className="navigator">
        {leagueList.map((item) => (
          <button onClick={() => {chooseLeague(item.id)}}>
          <img  src={item.logo} style={ { width: '50px', height: '60px' } } alt="League logo"/>
          <h6>{item.name}</h6>
          <p>{item.country}</p>
        </button>
        ))}
      </div>
      
      <div>
        {teamsList.map((team) => (
          <Team key={team.id} id={team.id} name={team.name} details={team.details}
        founded={team.founded} logo={team.logo} city={team.city} />
        ))}
      </div>
    </section>
  );
}

export default Leagues;
