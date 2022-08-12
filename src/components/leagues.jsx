import React from "react";
import { useState } from 'react';
import Team from "./team";

function Leagues (leagues) {
  const leagueList = leagues.leagues;
  const [teams, setTeams] = useState(leagueList.filter((item) => item.id === '423e4faa-4c4b-4cf2-b1e9-03e8e5cace1f'));

  console.log('leagueList =', leagueList);
  console.log('teamsList =', teams);

  const chooseLeague = (id) => {
    console.log('chose', id);
    setTeams(() => leagueList.filter((item) => item.id === id)[0].teams)
    console.log('changed to', teams);
  }

  return (
    <section>
      <div className="navigator">
        {leagueList.map((item) => (
          <button onClick={() => {chooseLeague(item.id)}}>
          <img  src={item.logo} style={ { width: '50px', height: '60px' } } alt="League logo"/>
        </button>
        ))}
      </div>
      
      <div>
        {teams.map((team) => (
          <Team key={team.id} id={team.id} name={team.name} details={team.details}
        founded={team.founded} logo={team.logo} city={team.city} />
        ))}
      </div>
    </section>
  );
}

export default Leagues;
