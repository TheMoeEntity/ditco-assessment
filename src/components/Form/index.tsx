"use client";
import Link from "next/link";
import { useState } from "react";

const Form = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  return (
    <form className="mt-5 flex flex-col gap-y-[20px] pb-12">
      <div className="rounded-lg px-5 flex flex-col w-full border-gray-300 border-[1px] py-2">
        <label htmlFor="" className=" block mb-1">
          Email
        </label>
        <input
          placeholder="Enter full name"
          type="mail"
          defaultValue={"sparinfo@mail.com"}
          className="py-1 font-bold bg-transparent outline-none w-full "
        />
      </div>
      <p className="text-[lightgray]">Please enter your email ID</p>

      <div className="flex justify-between gap-x-5">
        <div className="rounded-lg px-5 flex flex-col w-full border-gray-300 border-[1px] py-2">
          <label htmlFor="" className=" block">
            First Name
          </label>
          <input
            placeholder="First Name"
            type="text"
            defaultValue={"Brian"}
            className="py-1 font-bold bg-transparent outline-none w-full "
          />
        </div>

        <div className="rounded-lg px-5 flex flex-col w-full border-gray-300 border-[1px] py-2">
          <label htmlFor="" className=" block">
            Last Name
          </label>
          <input
            placeholder="Last Name"
            type="text"
            className="py-1 font-bold bg-transparent outline-none w-full "
          />
        </div>
      </div>

      <p className="text-[lightgray]">
        Make sure it matches the name on your PAN card
      </p>

      <div className="rounded-lg relative px-5 flex flex-col w-full border-gray-300 border-[1px] py-3">
        <label htmlFor="" className=" block mb-1"></label>
        <input
          placeholder="Password"
          type={visible ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-1 font-bold bg-transparent outline-none w-full "
        />
        <button
          type="button"
          onClick={() => setVisible(!visible)}
          style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            cursor: "pointer",
            border: "none",
            background: "none",
            padding: "0",
          }}
        >
          {!visible ? (
            <i className="fas fa-eye-slash"></i>
          ) : (
            <i className="fas fa-eye"></i>
          )}
        </button>
      </div>
      <p className="text-[lightgray]">
        Make sure it contains at least 8 characters, a number or symbols
      </p>
      <div className="flex border-[1px] border-[lightg] rounded-lg ">
        <div className="bg-[lightgray] w-[20%] md:w-[10%] flex items-center justify-center"></div>
        <input
          placeholder="Mobile"
          type="tel"
          className="py-4 h-full bg-transparent outline-none px-[10px] w-full"
        />
      </div>

      <div className="font-semibold text-sm">
        By selecting Agree and continue below, I agree to Spar{" "}
        <span className="font-semibold text-blue-700">Terms of Service</span> &{" "}
        <span className="font-semibold text-blue-700"> Policy</span>
      </div>
      <div className="flex justify-end">
        <button className="bg-green-600 text-center text-white rounded-md w-full h-[54px]">
          Agree and Continue
        </button>
      </div>
      <div className="text-center">
        Already have an account?{" "}
        <button className="font-semibold text-blue-700">Login</button>
      </div>
    </form>
  );
};

export default Form;
