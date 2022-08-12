import React from "react";
import { recieveLeagues } from "../redux/teams";
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Leagues () {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(recieveLeagues());
  });
}

export default Leagues;
