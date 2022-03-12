import React  from 'react'

const Movie=({movie,search})=> {

    console.log('movie', movie)


  return (

<div className="text-center">
<h1 className="grandtitre">Tous Les Films D'année 2021</h1>
<div className='d-flex flex-wrap container mt-5'>
{
 
movie.filter((el)=>(el.title.toLowerCase().includes(search.toLowerCase())))
.map((el,key)=>(

  <div className='col-sm-12   col-md-4  col-lg-3'>
    <div className="card  text-center " key={key} >

  <img src={el.image} className="card-img-top" alt="nnn"/>
  <div className="card-body">
    <h5 className="card-title">{el.title}</h5>
    <p className="card-text">{el.desc}</p>
    <p className="card-text">{el.duree}</p>
    <p className="card-text">{el.type}</p>
    <a href="nn" class="btn btn-primary">Télécharger</a>
    <a href="nn" class="btn btn-primary">Regarder </a>
  </div>
</div>
</div>
  ))
}
<nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li className="page-item"><a class="page-link" href="#">1</a></li>
    <li className="page-item"><a class="page-link" href="#">2</a></li>
    <li className="page-item"><a class="page-link" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</div>
</div>


  )}

  export default Movie