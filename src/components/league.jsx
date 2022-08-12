function League ({logo, country}) {
  return (
    <section>
      <img  src={logo} style={ { width: '50px' } } alt="League logo"/>
      {country}
    </section>
  );
}

export default League;
