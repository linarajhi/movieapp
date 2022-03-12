import React from 'react'

export const Compte = () => {
  return (
    <div className='forkk'>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Login</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Mot de passe</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <button type="submit" class="btn btn-primary">envoyer</button>
</form>
<div className='inscri'>
<h5 className='h'>Inscris vous ici</h5>
<button type="submit" class="btn btn-primary">Inscription</button>
</div>
    </div>
  )
}
 export default Compte;
