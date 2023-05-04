import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from "axios";

export default function Email() {
    // const { signIn, user } = useAuth() as AuthContextType;
     const navigate = useNavigate();

     const [email, setEmail] = useState("");

     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        const response = await axios.post("http://localhost:8080/api/forgotpassword", {
          email,
        });
        console.log(response.data);
        navigate("/login");
      } catch (error) {
        console.error(error);
        alert("Email does not exist.");
      }
    }

     return (
        <>
        <Link to="/landing">
          <header className="relative z-[1] w-56">
            <img className="h-full w-full" src={logo} alt="logo" />
          </header>
          </Link>
          <main>
            <section
              className={`absolute top-0 -z-[1] min-h-screen w-full bg-[url("/bg.png")] bg-cover`}
            ></section>
            <section className="absolute inset-0 bg-gradient-to-b from-zinc-900/50"></section>
            <br/> <br/> <br/> <br/> <br/> <br/>
            <form
              onSubmit={handleSubmit}
              className="relative mx-auto w-[380px] rounded-lg bg-black/75 p-16"
            >
              <article className="text-gray-300">
                <h1 className="mb-4 text-center text-4xl text-white">Enter e-mail address</h1>
                <section className="mb-4 flex flex-col gap-4">
                  <input
                    className="rounded-md bg-zinc-500 p-2 outline-none"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    required
                    value={email}
                onChange={(event) => setEmail(event.target.value)}
                  />
                  <div className="flex justify-center items-center">
                  
                    <button className="my-8 rounded-md bg-primary-200 p-2 font-semibold text-white outline-none">
                        Submit
                    </button>
                 
                 </div>
                </section>
              </article>
            </form>
          </main>
        </>
      );
    }
    