"use client";
import Link from "next/link";
import React from "react";
import "../assset/form.css";
import { useForm } from "react-hook-form";

const signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data.email + data.password + data.passwordConfirm);
  return (
    <>
      <form className="formulaire" onSubmit={handleSubmit(onSubmit)}>
        <p>Inscription</p>
        <input
          placeholder="email"
          type="email"
          id="email"
          {...register("email", {
            required: "Ce champ est requis!!!",
          })}
        />
        {errors.email && errors.email.message}

        <input
          placeholder="mot de passe"
          type="password"
          id="password"
          {...register("password", {
            required: "Ce champ est requis",
          })}
        />
        {errors.password && errors.password.message}

        <input
          placeholder="confirmer le mot de passe"
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Ce champ est requis",
          })}
        />
        {errors.passwordConfirm && errors.passwordConfirm.message}
        <input type="submit" value="Inscription" />
        <Link href="/login">Vous avez deja in compte ?</Link>
      </form>
    </>
  );
};

export default signup;
