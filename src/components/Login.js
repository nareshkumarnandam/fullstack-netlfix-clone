import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice";
import netflix_spinner from "../assets/netflix_spinner.gif";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      dispatch(setLoading(true));
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          // withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        console.log(error);
        toast.error(error.response.data.message);
      } finally {
        dispatch(setLoading(false));
      }
    }
    // console.log(fullName, email, password);
    setFullName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <Header />
      {
        isLoading && <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <img className="w-20px rounded-md" src={netflix_spinner} alt="loading-spinner"/>
      </div>
      }
      <div className="absolute"> 
        <img
          className="w-[100vw] h-[100vh] bg-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="banner"
        />
      </div>
      <form
        onSubmit={getInputData}
        className="flex flex-col items-center justify-center absolute my-36 left-0 right-0 w-full max-w-[450px] bg-black bg-opacity-85 rounded-lg p-16 mx-auto"
      >
        <h1 className="text-white text-3xl mb-5 font-bold">
          {isLogin ? "Sign In" : "Sign Up"}
        </h1>
        <div className="flex flex-col">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 w-full h-12 bg-gray-800 text-white mt-3 border-0 outline-none rounded-md px-5 text-md"
            />
          )}

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="E-mail"
            className="p-3 my-2 w-full h-12 bg-gray-800 text-white mt-3 border-0 outline-none rounded-md px-5 text-md"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 my-2 w-full h-12 bg-gray-800 text-white mt-3 border-0 outline-none rounded-md px-5 text-md"
          />
          <button
            type="submit"
            className="bg-red-600 mt-6 p-3 text-white rounded-sm font-medium"
          >
            {`${isLoading ? "Loading..." :  (isLogin ? "Sign In" : "Sign Up")} `}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflx ? " : "Already have an account ? "}
            <span
              onClick={loginHandler}
              className="ml-1 text-red-600 font-medium cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
