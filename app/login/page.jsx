"use client";
import Link from "next/link";
import React from "react";
import "../assset/form.css";
import { useForm } from "react-hook-form";

const login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data.email);

  return (
    <>
      <form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <p>Connexion</p>
        <input
          placeholder="email"
          type="email"
          {...register("email", {
            required: "Ce champ est requis",
            pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm
          })}
        />
        {errors.email && errors.email.message}

        <input
          placeholder="mot de passe"
          type="password"
          {...register("password", {
            required: "Ce champ est requis",
            pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,25}$/
          })}
        />
        {errors.password && errors.password.message}

        <input type="submit" value="Connexion" />
        <Link href="/signup">Vous n'avez pas encore de compte ?</Link>
      </form>
    </>
  );
};

export default login;
