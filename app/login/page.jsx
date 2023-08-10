import Link from 'next/link'
import React from 'react'
import "../assset/form.css"

const login = () => {
  return (
    <>
      <form className='formulaire'>
        <p>Connexion</p>
        <input placeholder='email' type="email" />
        <input placeholder='mot de passe' type="password" />
        <input type="submit" value="Connexion" />
        <Link href="/signup">Vous n'avez pas encore de compte ?</Link>
      </form>
    </>
  )
}

export default login