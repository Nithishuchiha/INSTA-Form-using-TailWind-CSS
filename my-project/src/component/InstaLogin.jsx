import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import image from "./assets/EHY6QnZYdNX.png";

const InstaLogin = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    console.log("data", data);
    e.preventDefault();
  };
  return (
    <div>
      <section className="flex flex-col justify-center items-center  py-40">
        <div>
          {/* <img src="https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www" /> */}
        </div>
        <div className="border-2 p-8 h-180 ">
          <p className="italic text-4xl p-2 items-center  px-16"> Instagram</p>

          <form className="mt-8  flex flex-col" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Phone number,username, or email "
              className="p-2 w-80 border-2 border-gray-400 rounded-md mb-3 text-sm"
              onChange={handleChange}
              name="email"
              value={data.email}
            />
            <input
              type="text"
              placeholder="password "
              className="p-2 w-80 border-2 border-black rounded-md mb-3 text-sm border-gra"
              onChange={handleChange}
              name="password"
              value={data.password}
            />

            <button
              type="submit"
              className="p-2 w-80 border-2 bg-loginButton rounded-md mb-3 px-16 text-white font-bold "
            >
              Log in
            </button>
          </form>
          <p className="mt-6 mb-6 justify-center flex text-gray-700 font-semibold">
            --------------------OR---------------------
          </p>
          <a
            className="flex justify-center text-darkBlue"
            href="https://www.facebook.com/login.php?skip_api_login=1&api_key=124024574287414&kid_directed_site=0&app_id=124024574287414&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Foauth%3Fclient_id%3D124024574287414%26locale%3Den_US%26redirect_uri%3Dhttps%253A%252F%252Fwww.instagram.com%252Faccounts%252Fsignup%252F%26response_type%3Dcode%252Cgranted_scopes%26scope%3Demail%26state%3D%257B%2522fbLoginKey%2522%253A%25221ddxwv7o98494r1wqmvsbbmw612d9cfcf3l9vy98bx1hz1xy5f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3Daf073058-f9c6-4049-88ba-e630f6e69c68%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fsignup%2F%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522fbLoginKey%2522%253A%25221ddxwv7o98494r1wqmvsbbmw612d9cfcf3l9vy98bx1hz1xy5f%2522%252C%2522fbLoginReturnURL%2522%253A%2522%252Ffxcal%252Fdisclosure%252F%253Fnext%253D%25252F%2522%257D%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
          >
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            <FontAwesomeIcon className="mr-2 mt-1 " icon={faFacebook} />
            Log in with Facebook
          </a>
          <a
            className="flex justify-center text-darkBlue text-sm mt-2"
            href="#"
          >
            {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
            {/* <FontAwesomeIcon className="mr-2 mt-1 " icon={faFacebook} /> */}
            Forget password?
          </a>
        </div>
        <div className="border-2 p-5 w-96 mt-8 flex justify-center">
          <p>
            Don&apos;t have an account?
            <span className="text-signUp ml-2">
              <Link to="/signUp">Sign Up</Link>
            </span>
          </p>
        </div>
        <p>Get the app</p>
        <div className="flex justify-center mt-4">
          <img
            className="ml-2 w-32 h-10"
            src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"
          />
          <img className="ml-2 w-32 h-10" src={image} />
        </div>
      </section>
    </div>
  );
};

export default InstaLogin;
