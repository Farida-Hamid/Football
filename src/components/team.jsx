import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

function Team ({ team }) {
  return (
    <Link to="/popup" state={{ team }}>
      <img  src={team.logo} style={ { width: '150px' } } alt="League logo"/>
      {team.name} / {team.city}
    </Link>
  );
}

// Team.propTypes = {
//   team: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     city: PropTypes.string.isRequired,
//     founded: PropTypes.number.isRequired,
//     details: PropTypes.string.isRequired,
//     logo: PropTypes.string.isRequired,
//   }),
// };

// Team.defaultProps = {
//   team: {},
// };

export default Team;
