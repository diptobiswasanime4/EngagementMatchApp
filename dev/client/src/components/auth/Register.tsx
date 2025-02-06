import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import API_ENDPOINT from "../../api/config";
import { Form } from "radix-ui";

function Register() {
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });
  async function register() {
    try {
      const resp = await axios.post(`${API_ENDPOINT}/register`, user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resp.data.success) {
        setRedirect(true);
      }
    } catch (error) {
      console.log("Error registering.", error);
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="flex flex-col gap-6 items-center bg-[#0A192F]">
      <div className="text-yellow-400 text-5xl mt-16 mb-2 bg-[#0A192F] ">Sign Up</div>
      <Form.Root className="FormRoot">
          <Form.Field className="FormField" name="Firstname">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">First Name</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your First name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input 
                className="Input" 
                type="text" 
                placeholder="Firstname"
                value={user.firstname}
                onChange={(e) =>
                  setUser((initUser) => ({ ...initUser, firstname: e.target.value }))
                }
                required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="Lastname">
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                justifyContent: "space-between",
              }}
            >
              <Form.Label className="FormLabel">Last Name</Form.Label>
              <Form.Message className="FormMessage" match="valueMissing">
                Please enter your Last name
              </Form.Message>
            </div>
            <Form.Control asChild>
              <input 
                className="Input" 
                type="text" 
                placeholder="Lastname"
                value={user.lastname}
                onChange={(e) =>
                  setUser((initUser) => ({ ...initUser, lastname: e.target.value }))
                }
                required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="FormField" name="email">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Email</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your email
                  </Form.Message>
                  <Form.Message className="FormMessage" match="typeMismatch">
                    Please provide a valid email
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input 
                    className="Input" 
                    type="email" 
                    placeholder="Email"
                    value={user.email}
                    onChange={(e) =>
                      setUser((initUser) => ({ ...initUser, email: e.target.value }))
                    }
                    required />
                </Form.Control>
              </Form.Field>
              <Form.Field className="FormField" name="password">
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    justifyContent: "space-between",
                  }}
                >
                  <Form.Label className="FormLabel">Password</Form.Label>
                  <Form.Message className="FormMessage" match="valueMissing">
                    Please enter your password
                  </Form.Message>
                </div>
                <Form.Control asChild>
                  <input 
                    className="Input" 
                    type="password" 
                    placeholder="Password"
                    value={user.password}
                    onChange={(e) =>
                      setUser((initUser) => ({ ...initUser, password: e.target.value }))
                    }
                    required />
                </Form.Control>
              </Form.Field>
              <Form.Submit asChild>
                <button className="Button">
                  Submit
                </button>
              </Form.Submit>
        </Form.Root>
      {/* <input
        className="bg-black rounded-xs text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Firstname"
        value={user.firstname}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, firstname: e.target.value }))
        }
      /> */}
      {/* <input
        className="bg-black rounded-xs text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Lastname"
        value={user.lastname}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, lastname: e.target.value }))
        }
      />
      <input
        className="bg-black rounded-xs text-yellow-300 text-xl p-1"
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, email: e.target.value }))
        }
      />
      <input
        className="bg-black rounded-xs text-yellow-300 text-xl p-1"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, password: e.target.value }))
        } */}
      {/* /> */}
      {/* <div
        className="bg-yellow-400 text-2xl text-center rounded p-2 cursor-pointer w-1/6 hover:bg-black hover:text-yellow-400 transition-colors duration-500"
        onClick={register}
      >
        Submit
      </div> */}
      <div className="text-white text-lg">
        Already a member?{" "}
        <Link to={"/login"}>
          <b>Log In</b>
        </Link>
      </div>
    </div>
  );
}

export default Register;
