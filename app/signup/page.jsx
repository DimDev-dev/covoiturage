"use client";
import Link from "next/link";
import React, { useContext, useRef } from "react";
import "../assset/form.css";
import { useForm } from "react-hook-form";
import { UserContext } from "../userContext/page";

const signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { signUp } = useContext(UserContext);
  const formRef = useRef();
  // console.log(signUp);

  const onSubmit = async (data) => {
    try {
      const cred = await signUp(data.email, data.password);
      formRef.current.reset();
      console.log(cred);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <form
        ref={formRef}
        className="formulaire"
        onSubmit={handleSubmit(onSubmit)}
      >
        <p>Inscription</p>
        <input
          name="email"
          placeholder="email"
          type="email"
          id="email"
          {...register("email", {
            required: "Ce champ est requis!!!",
            pattern: /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/gim,
          })}
        />
        {errors.email && errors.email.message}

        <input
          name="pwd"
          placeholder="mot de passe"
          type="password"
          id="password"
          {...register("password", {
            required: "Ce champ est requis",
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,25}$/
          })}
        />
        {errors.password && errors.password.message}

        <input
          name="pwd"
          placeholder="confirmer le mot de passe"
          type="password"
          id="passwordConfirm"
          {...register("passwordConfirm", {
            required: "Ce champ est requis",
            // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&_])[A-Za-z\d$@$!%*?&_]{8,25}$/
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
