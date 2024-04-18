"use client";
import { Helpers } from "@/Helpers";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";

const Form = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const { push } = useRouter()
  const submitForm = async (e: FormEvent) => {
    e.preventDefault()
    const data = {
      email: (
        e.target[
        0 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      fullName: (
        e.target[
        1 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      phone: (
        e.target[
        5 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
      password: (
        e.target[
        3 as unknown as keyof typeof e.target
        ] as unknown as HTMLInputElement
      ).value,
    };
    if (data.email.trim() === "") {
      toast.error("Email cannot be empty");
      return;
    } if (data.password.trim() === "") {
      toast.error("Oga enter password jare, don't be mad 😡 ");
      return;
    } else if (!Helpers.isValidPassword(data.password)) {
      toast.error("Password not valid!");
      return
    } else if (data.phone.trim() === '') {
      toast.error("Oga enter your phone number, this is not a valid phone number");
      return;
    }
    await fetch(('/api/signup'), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async res => {
        const isJson = res.headers.get('content-type')?.includes('application/json')
        const data = isJson ? await res.json() : null

        if (!res.ok) {
          const error = (data && data.message) || res.status;
          toast.error(error)
          return Promise.reject(error)

        } else if (res.ok) {
          toast.success("Sign up success")
          push('/')
          console.log(data)
          return data
        }
      })
      .catch(err => {
        console.log(err)
      })

  }
  return (
    <form className="mt-5 flex flex-col gap-y-[20px] pb-12" onSubmit={e => submitForm(e)}>
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
            defaultValue={'Nwigberi'}
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
        <div className="bg-[lightgray] w-[20%] md:w-[15%] flex items-center justify-center">+91</div>
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
