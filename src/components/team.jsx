function Team ({ logo, city, name, details, founded, id }) {
  return (
    <section>
    here!
      <img  src={logo} style={ { width: '150px' } } alt="League logo"/>
      {name} / {city} / {founded} / {id} / {details}
    </section>
  );
}

export default Team;
