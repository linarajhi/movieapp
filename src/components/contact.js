import React from 'react'

const Contact = () => {
  return <div className='forkk'>
<form>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Nom et Prenom</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Adresse mail</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Numero de Tel</label>
    <input type="text" className="form-control" id="exampleInputPassword1"/>
  </div>
  
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Commentaire</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">coche </label>
  </div>
  <button type="submit" className="btn btn-primary">Envoye</button>
</form>

</div>
}

export default Contact