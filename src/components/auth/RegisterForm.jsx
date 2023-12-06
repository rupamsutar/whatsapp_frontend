import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../utils/validation";
import AuthInput from "./AuthInput";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { Link, useNavigate } from "react-router-dom";
import { logout, registerUser } from "../../features/userSlice";
import Picture from "./Picture";
import axios from "axios";
import { upload } from "@testing-library/user-event/dist/upload";

const cloud_name = process.env.REACT_APP_CLOUDINARY_NAME;
const cloud_secret = process.env.REACT_APP_CLOUDINARY_SECRET;

console.log("cloud_name :", cloud_name, "cloud_secret :", cloud_secret);

export default function RegisterForm() {
  const { status, error } = useSelector((state) => state.user);
  const [picture, setPicture] = useState();
  const [readablePicture, setReadablePicture] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    let res;
    if(picture) {
      // upload to cloudinary and then register user
      await uploadImage().then(async(resp) => {
        res = await dispatch(registerUser({...data, picture: resp.secure_url}));
      })
    } else {
      res = await dispatch(registerUser({ ...data, picture: "" }));
    }
    if (res?.payload?.user) {
      navigate("/");
    }
  };

  const uploadImage = async() => {
    let formData = new FormData();
    formData.append("upload_preset", cloud_secret);
    formData.append("file", picture);
    const {data} = await axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, formData);
    console.log(data);
    return data
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Container */}
      <div className="w-full max-w-md space-y-8 p-10 dark:bg-dark_bg_2 rounded-xl">
        {/*Heading*/}
        <div className="text-center dark:text-dark_text_1">
          <h2 className="mt-6 text-3xl font-bold">Welcome</h2>
          <p className="mt-2 text-sm">Sign up</p>
        </div>
        {/*Form*/}
        <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-6">
          <AuthInput
            name="name"
            type="text"
            placeholder="Full Name"
            register={register}
            error={errors?.name?.message}
          />
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
          <AuthInput
            name="status"
            type="text"
            placeholder="Status (optional)"
            register={register}
            error={errors?.status?.message}
          />

          {/* Picture */}
          <Picture
            readablePicture={readablePicture}
            setReadablePicture={setReadablePicture}
            setPicture={setPicture}
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
            {status === "loading" ? <PulseLoader color="#fff" /> : "Sign Up"}
          </button>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md dark:text-dark_text_1">
            <span onClick={() => dispatch(logout())}>Have an account ?</span>
            <Link to="/login" className="hover:underline cursor-pointer">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
