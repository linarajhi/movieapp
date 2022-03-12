import React,{useState} from 'react'

const AjoutFilm=()=> {

  return (  
    <div className='mt-5 mx-5'>
     
<button type="button" className="btn btn-success mt-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
 Ajout Films
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">AjoutFilm</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <input type="text" class="form-control" name="titre" id="exampleFormControlInput2"  placeholder="ajouter titre"/>
      <input type="text" class="form-control" name="image" id="exampleFormControlInput3"  placeholder="ajouter image"/>
      <input type="text" class="form-control" name="annee" id="exampleFormControlInput5" placeholder="ajouter annee"/>

       </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">fermer</button>
        <button type="button" className="btn btn-primary">sauvgarder</button>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default AjoutFilm