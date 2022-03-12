import React from 'react'

const Home=()=> {
  return (
<div className='dvdv'>
<div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://celebrationcinema.com/images/default-source/celebration/home-hero/thbtmn_studioc_gen_dated_2880x1040.jpg?sfvrsn=ecbc656d_0" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">

        <p>Top films 2022</p>
        <button type="button" class="btn btn-warning">procurez-vous des billets</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://celebrationcinema.com/images/default-source/celebration/home-hero/death-on-the-nile-2880x1040.jpg?sfvrsn=e332c812_0" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
    
        <p>Top films 2022 </p>
        <button type="button" class="btn btn-warning">procurez-vous des billets</button>
      
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://celebrationcinema.com/images/default-source/celebration/home-hero/dog-2880x1040.jpg?sfvrsn=8ba5fb6e_0" class="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
     
        <p>Top films 2022 </p>
        <button type="button" class="btn btn-warning">procurez-vous des billets</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

<div className="card mb-3 my-4">

  <div class="row">
  <div class="col-sm-3">
  <img className="film-cover" src="https://celebrationcinema.com/images/default-source/movie-posters/HO00007294.jpg?size=800&Status=Master" />
  </div>
  <div class="col-sm-3">
<img className="film-cover2" src="https://ee2f8znn6mv.exactdn.com/wp-content/uploads/2021/11/encanto-disney-colombie-13.jpg?strip=all&lossy=1&quality=92&resize=765%2C408&ssl=1" />
  </div>
  <div class="col-sm-3">
<img className="film-cover3" src="https://lumiere-a.akamaihd.net/v1/images/image_4bb74001.jpeg?region=0,0,640,480" />
  </div>
  <div class="col-sm-12">
    <h5 className="card-title">Encanto</h5>
    <p className="card-text">Réalisateur : Byron Howard, Jared Bush, Charise Castro Smith
          Avec : Wilmer Valderrama, Stephanie Beatriz, Diane Guerrero, Angie Cepeda, Jessica Darrow, María Cecilia Botero, Adassa, Mauro Castillo, Rhenzy Feliz, Carolina Gaitan
          Encanto de Walt Disney Animation Studios raconte l'histoire d'une famille extraordinaire, les Madrigals, qui vivent cachés dans les montagnes colombiennes, dans une maison magique, dans une ville animée, dans un endroit merveilleux et enchanté appelé Encanto. La magie de l'Encanto a béni chaque enfant de la famille avec un cadeau unique allant de la super force au pouvoir de guérir tous les enfants sauf un, Mirabel. Mais lorsqu'elle découvre que la magie entourant l'Encanto est en danger, Mirabel décide qu'elle, la seule madrigale ordinaire, pourrait bien être le dernier espoir de sa famille exceptionnelle.</p>
    <p className="card-text"><small class="text-muted">exclusive</small></p>
    <button type="button" class="btn btn-warning">regardez </button>
  </div>
  </div>
</div>
</div>


  )}
  export default Home