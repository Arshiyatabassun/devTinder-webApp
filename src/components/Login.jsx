import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import { FaUser } from "react-icons/fa6";
import { Mail } from "lucide-react";
import { KeyRound } from "lucide-react";

const Login = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  // const [isPassword,setIsPassword] =useState(false);

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      // console.log(res.data)
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      // console.log(err)
      setError(err?.response?.data || "somting went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        { withCredentials: true }
      );

      console.log(res.data);
      dispatch(addUser(res?.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "somting went wrong");
    }
  };
  return (
    <div className="my-10 flex justify-center">
      <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
          <h2 className="card-title font-serif justify-center">
            {isLoginForm ? "Login" : "SignUp"}
          </h2>
          <div className="mx-auto">
            {!isLoginForm && (
              <>
                <div className="mx-6 justify-center">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend ">First Name:</legend>
                    <div className="relative w-64">
                      <input
                        type="text"
                        value={firstName}
                        className="input input-bordered w-full pl-10"
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <FaUser
                        className="absolute left-3 top-3 text-gray-500"
                        size={18}
                      />
                    </div>
                  </fieldset>
                </div>
                <div className="mx-6 justify-center">
                  <fieldset className="fieldset">
                    <legend className="fieldset-legend ">Last Name:</legend>
                    <div className="relative w-64">
                      <input
                        type="text"
                        value={lastName}
                        className="input input-bordered w-full pl-10"
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <FaUser
                        className="absolute left-3 top-3 text-gray-500"
                        size={18}
                      />
                    </div>
                  </fieldset>
                </div>
              </>
            )}
            <div className="mx-6 justify-center">
              <fieldset className="fieldset">
                <legend className="fieldset-legend ">Email ID:</legend>
                <div className="relative w-64">
                  <input
                    type="text"
                    value={emailId}
                    className="input input-bordered w-full pl-10"
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                  <Mail
                    className="absolute left-3 top-3 text-gray-500"
                    size={18}
                  />
                </div>
              </fieldset>
            </div>
            <div className="mx-6 justify-center">
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Password:</legend>
                <div className="relative w-64">
                  <input
                    type="password"
                    value={password}
                    className="input input-bordered w-full pl-10"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <KeyRound
                    className="absolute left-3 top-3 text-gray-500"
                    size={18}
                  />
                </div>
              </fieldset>
            </div>
          </div>

          <p className="text-red-500">{error}</p>

          <div className="card-actions justify-center">
            <button
              className="btn btn-primary my-2"
              onClick={isLoginForm ? handleLogin : handleSignUp}
            >
              {isLoginForm ? "Login" : "SignUp"}
            </button>
          </div>
          <p
            className="m-auto cursor-pointer py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm ? "New User? SignUp Here" : "Existing User?Login Here"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
