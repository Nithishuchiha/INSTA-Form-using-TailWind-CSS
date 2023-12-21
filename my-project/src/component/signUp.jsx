import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import image from "../component/assets/EHY6QnZYdNX.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const SignUp = () => {
  const [form, setForm] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form", form);
  };

  return (
    <div>
      <section>
        <div className="flex flex-col justify-center items-center  py-20">
          <form
            className="flex flex-col justify-center items-center p-8 border-2 "
            action=""
            onSubmit={handleSubmit}
          >
            <p className="text-3xl italic mb-4">Instagram</p>
            <p className="text-gray-600  font-semibold mb-4">
              Sign up to see photos and videos <br />
              <span className="ml-8">from your friends.</span>
            </p>

            <button className="flex justify-center bg-loginButton text-white p-2 w-72 rounded-lg text-sm">
              {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
              <FontAwesomeIcon className="mr-2 mt-1 " icon={faFacebook} />
              <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221ddxwv7o98494r1wqmvsbbmw612d9cfcf3l9vy98bx1hz1xy5f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Daf073058-f9c6-4049-88ba-e630f6e69c68%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221ddxwv7o98494r1wqmvsbbmw612d9cfcf3l9vy98bx1hz1xy5f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0">
                Log in with Facebook
              </a>
            </button>
            <p className="text-gray-600 text-sm mb-4 mt-3">
              -------------------------- OR --------------------------
            </p>
            <input
              type="text"
              placeholder="Mobile Number or Email"
              name="email"
              className="p-2 w-72 border-2 border-gray-400 rounded-md mb-3 text-sm"
              onChange={handleChange}
              value={form.email}
            />
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              className="p-2 w-72 border-2 border-gray-400 rounded-md mb-3 text-sm"
              onChange={handleChange}
              value={form.name}
            />
            <input
              type="text"
              placeholder="Username"
              name="username"
              className="p-2 w-72 border-2 border-gray-400 rounded-md mb-3 text-sm"
              onChange={handleChange}
              value={form.username}
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="p-2 w-72 border-2 border-gray-400 rounded-md mb-3 text-sm"
              onChange={handleChange}
              value={form.password}
            />
            <button
              className="flex justify-center bg-loginButton text-white p-2 w-72 rounded-lg text-sm"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <p className="border-2 p-4 w-80 mt-4 flex justify-center  mb-2">
            Have an account?{" "}
            <span className="text-loginButton ml-2">
              <Link to="/">Log In</Link>
            </span>
          </p>
          <p>Get the app</p>
          <div className="flex justify-center mt-4">
            <img
              className="ml-2 w-32 h-10"
              src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
            />
            <img className="ml-2 w-32 h-10" src={image} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;
