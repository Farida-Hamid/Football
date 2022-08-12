import React from "react";
import { recieveLeagues } from "../redux/teams";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import League from "./league";

function Leagues () {
  const leagueList = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => async () => {
    await dispatch(recieveLeagues());
  }, []);
  console.log('leagueList =', leagueList);

  return (
    <div>
      {leagueList.map((item) => (
        <League key={item.name} logo={item.logo} country={item.country} />
      ))}
    </div>
  );
}

export default Leagues;
