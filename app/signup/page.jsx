import Link from "next/link";
import React from "react";
import "../assset/form.css"

const signup = () => {
  return (
    <>
      <form className="formulaire">
        <p>Inscription</p>
        <input placeholder="email" type="email" id="email" />
        <input placeholder="mot de passe" type="password" id="password" />
        <input placeholder="confirmer le mot de passe" type="password" id="password-confirm" />
        <input type="submit" value="Inscription" />
        <Link href="/login">Vous avez deja in compte ?</Link>
      </form>
    </>
  );
};

export default signup;
