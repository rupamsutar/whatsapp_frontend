import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signInSchema } from "../utils/validation";
import AuthInput from "../components/auth/AuthInput";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, logout } from "../features/userSlice";
export default function RegisterForm() {
  const { status, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });


  const onSubmit = async (values) => {
    let res = await dispatch(loginUser({...values}));
    if(res?.payload?.user) {
      navigate('/')
    }
  };


  return (
    <div className="min-h-screen w-full dark:bg-dark_bg_1 flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/*Heading*/}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome back</h2>
          <p className="mt-2 text-sm">Sign in</p>
        </div>
        {/*Form*/}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
       
          <AuthInput
            name="email"
            type="text"
            placeholder="Email"
            register={register}
            error={errors?.email?.message}
          />
          <AuthInput
            name="password"
            type="text"
            placeholder="Password"
            register={register}
            error={errors?.password?.message}
          />

          {error ? (
            <div className="">
              <p className="text-red-400">{error}</p>
            </div>
          ) : null}
          <button
            className="w-full flex justify-center bg-green_1 text-gray-100 p-3 rounded-full tracking-wide font-semibold 
          focus:outline-none hover:bg-green_2 shadow-lg cursor-pointer transition ease-in duration-300 "
            type="submit"
          >
            {status === "loading" ? <PulseLoader color="#fff" /> : "Sign In"}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span onClick={() => dispatch(logout())}>You do not have an account ?</span>
            <Link href="/register" className="hover:underline cursor-pointer">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
