import { useLocation } from 'react-router-dom';

function Popup () {
  const location = useLocation();
  const { team } = location.state;

  return (
    <div>
    displaying
      <img  src={team.logo} style={ { width: '150px' } } alt="League logo"/>
      {team.name} / {team.city} / {team.founded} / {team.id} / {team.details}
    </div>
  );
}

export default Popup;
