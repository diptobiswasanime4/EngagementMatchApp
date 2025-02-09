import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import API_ENDPOINT from "../../api/config";
import { UserContext } from "../../UserContext";
import { Form } from "radix-ui";

function Login() {
  const { setUserInfo } = useContext(UserContext);
  const [redirect, setRedirect] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  async function login() {
    try {
      const resp = await axios.post(`${API_ENDPOINT}/login`, user, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(resp);

      if (resp.data.success) {
        setRedirect(true);
        setUserInfo(resp.data);
      }
    } catch (error) {
      console.log("Error logging in.", error);
    }
  }
  if (redirect) {
    return <Navigate to={"/join-now"} />;
  }
  return (
    <div className="bg-[#0A192F] flex flex-col gap-6 items-center pb-64 h-screen">
      <div className="text-yellow-400 text-5xl mt-50">Log In</div>
      <div className="text-yellow-600 text-lg">
        New to this site?{" "}
        <Link to={"/register"}>
          <b>Sign Up</b>
        </Link>
      </div>
      {/* <input
        className="bg-white rounded-xs text-black text-xl p-1"
        type="text"
        placeholder="Email"
        value={user.email}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, email: e.target.value }))
        }
      /> */}
      <Form.Root className="FormRoot">
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
        className="bg-white rounded-xs text-black text-xl p-1"
        type="password"
        placeholder="Password"
        value={user.password}
        onChange={(e) =>
          setUser((initUser) => ({ ...initUser, password: e.target.value }))
        }
      /> */}
      {/* <div
        className="bg-yellow-400 text-2xl text-center rounded mt-4 p-2 cursor-pointer w-1/6 border-2 hover:bg-black hover:text-yellow-400 transition-colors duration-500"
        onClick={login}
      >
        Submit
      </div> */}
      <div
        className="bg-yellow-400 text-l text-center rounded px-2 py-2 mt-1 cursor-pointer w-1/7 border-1 hover:bg-white hover:text-black transition-colors duration-500"
        onClick={() => setRedirect(true)}
      >
        Login As Guest
      </div>
    </div>
  );
}

export default Login;
