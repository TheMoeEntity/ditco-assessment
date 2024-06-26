import Form from "@/components/Form";
import React from "react";
import winterman from "../../../public/images/AVATAR.png";
import Image from "next/image";
import spar from '../../../public/images/Screenshot 2024-04-18 at 18.23.25.png'
import blob from '../../../public/images/pnnnnn.png'
import blob2 from '../../../public/images/pnnnnn2.png'

const page = () => {
  return (
    <div className="flex items-center justify-center w-full min-h-screen">
      <section className="w-full h-fit flex flex-col lg:flex-row mx-auto max-w-[1600px]">
        <div className="px-10 min-h-screen xl:min-h-[1200px] overflow-x-hidden object-cover relative flex flex-col items-center justify-center w-full bg-[#316AF4] lg:w-[40%]  lg:flex-[40%] h-auto">
          <div className="absolute w-[137px] top-1/2 md:top-1/3 -right-17 md:-right-15 md:text-4xl text-3xl text-white">
            <Image
              src={blob}
              alt="blob"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-[57%] md:w-[60%] h-auto opacity-35"
            />
          </div>
          <div className="absolute w-[137px] top-50 -left-5 md:text-4xl text-3xl text-white">
            <Image
              src={blob2}
              alt="blob2"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-[60%] h-auto opacity-100"
            />
          </div>
          <div className="absolute w-[137px] top-10 xs:left-1 2xsm:left-7 md:left-18 md:text-4xl text-3xl text-white">
            <Image
              src={spar}
              alt="logo"
              quality={100}
              sizes={"100vw"}
              className="object-cover w-full h-auto"
            />
          </div>
          <div className="absolute bottom-10 xs:left-4 2xsm:left-7 md:left-18 text-[lightgray] text-sm ">
            Copyright &copy; 2021 Spar Inc. Proudly made in India.
          </div>

          <div className="w-auto mx-auto flex-col flex gap-y-10">
            <div className="w-full md:w-[80%] mx-auto" >
              <Image
                src={winterman}
                alt="winterman"
                quality={100}
                sizes={"100vw"}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="text-white w-full md:w-[80%] lg:w-[100%] xl:w-[85%] mt-16 flex md:mx-auto flex-col gap-y-6">
              <h1 className="text-3xl md:text-4xl font-semibold">
                We simplify your financial handlings
              </h1>
              <p className="md:w-[80%] lg:w-[70%] xl:w-full">
                Register your business or file your tax returns seamlessly with
                Spar
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#ffff] lg:w-[50%]  lg:flex-[50%] text-gray-700 px-6 py-12 md:px-12 flex flex-row items-center">

          <div className="flex flex-col gap-5 w-full max-w-[490px] mx-auto">
            <h1 className="text-4xl text-black md:text-[52px] w-full leading-tight mb-7">
              Sign up
            </h1>
            <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
              <span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_191_13499)">
                    <path
                      d="M19.999 10.2217C20.0111 9.53428 19.9387 8.84788 19.7834 8.17737H10.2031V11.8884H15.8266C15.7201 12.5391 15.4804 13.162 15.1219 13.7195C14.7634 14.2771 14.2935 14.7578 13.7405 15.1328L13.7209 15.2571L16.7502 17.5568L16.96 17.5774C18.8873 15.8329 19.9986 13.2661 19.9986 10.2217"
                      fill="#4285F4"
                    />
                    <path
                      d="M10.2055 19.9999C12.9605 19.9999 15.2734 19.111 16.9629 17.5777L13.7429 15.1331C12.8813 15.7221 11.7248 16.1333 10.2055 16.1333C8.91513 16.1259 7.65991 15.7205 6.61791 14.9745C5.57592 14.2286 4.80007 13.1801 4.40044 11.9777L4.28085 11.9877L1.13101 14.3765L1.08984 14.4887C1.93817 16.1456 3.24007 17.5386 4.84997 18.5118C6.45987 19.4851 8.31429 20.0004 10.2059 19.9999"
                      fill="#34A853"
                    />
                    <path
                      d="M4.39899 11.9777C4.1758 11.3411 4.06063 10.673 4.05807 9.99996C4.06218 9.32799 4.1731 8.66075 4.38684 8.02225L4.38115 7.88968L1.19269 5.4624L1.0884 5.51101C0.372763 6.90343 0 8.4408 0 9.99987C0 11.5589 0.372763 13.0963 1.0884 14.4887L4.39899 11.9777Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M10.2059 3.86663C11.668 3.84438 13.0822 4.37803 14.1515 5.35558L17.0313 2.59996C15.1843 0.901848 12.7383 -0.0298855 10.2059 -3.6784e-05C8.31431 -0.000477834 6.4599 0.514732 4.85001 1.48798C3.24011 2.46124 1.9382 3.85416 1.08984 5.51101L4.38946 8.02225C4.79303 6.82005 5.57145 5.77231 6.61498 5.02675C7.65851 4.28118 8.9145 3.87541 10.2059 3.86663Z"
                      fill="#EB4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_191_13499">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </span>
              Sign up with Google
            </button>

            <div className="flex items-center justify-between">
              <div className="w-[41%] h-[1px] bg-[lightgray]"></div>
              <div>or</div>
              <div className="w-[41%] h-[1px] bg-[lightgray]"></div>
            </div>
            <Form />

          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
