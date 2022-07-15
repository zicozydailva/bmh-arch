import React from "react";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import "../assests/css/modal.css";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import loader from "../assests/images/loading.gif";
import Alert from "../components/Alert";
import { CREATE_ARCHITECTPROFILE } from "../graphql/mutation";

const New = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectImg, setProjectImg] = useState("");
  const [charge, setCharge] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [resumeImg, setResumeImg] = useState("");
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });

  const clear = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMobile("");
    setDescription("");
    setCategory("");
    setProjectTitle("");
    setProjectImg("");
    setCharge("");
    setProfileImg("");
    setResumeImg("");
  };

  const getSelected = (object) => {
    let value = object?.target.value;
    setCategory(value);
  };

  const [createArchitectProfile, { error, loading }] = useMutation(
    CREATE_ARCHITECTPROFILE
  );

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg });
  };

  const onChangeResume = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "lecki3ti");
    data.append("cloud_name", "dclncqxwp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dclncqxwp/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setResumeImg(file?.secure_url);
  };

  const onChangeProject = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "lecki3ti");
    data.append("cloud_name", "dclncqxwp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dclncqxwp/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg(file?.secure_url);
    // console.log(file.secure_url);
  };

  const onChangeProfile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "lecki3ti");
    data.append("cloud_name", "dclncqxwp");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dclncqxwp/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProfileImg(file?.secure_url);
    // console.log(file);
  };

  if (loading) {
    return (
      <div className="flex w-10/12 h-screen m-auto justify-center items-center">
        <img className="block mr-9" src={loader} alt="Loading..." />
      </div>
    );
  }

  if (error) {
    console.log(error);
  }

  const createUser = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !mobile) {
      showAlert(true, "danger", "Please Provide all fields");
      return;
    }

    try {
      const data = await createArchitectProfile({
        variables: {
          firstName,
          lastName,
          mobile,
          email,
          projectTitle,
          projectImg,
          description,
          charge,
          category,
          profileImg,
          resumeImg,
        },
      });
      setTimeout(() => {
        clear();
      }, 4000);
      showAlert(true, "success", "Profile Created Successfully ...");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className=" flex flex-col items-center content-center  m-auto  w-full p-10 rounded">
      <h3 className="block sm:text-sm md:text-2xl lg:text-4xl uppercase tracking-wide text-gray-700  font-bold mb-6">
        Create Architect Profile
      </h3>
      <form className="w-full max-w-lg">
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Jane"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <p className="text-red-500 text-xs italic">
              Please fill out all fields.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder="Doe"
            />
          </div>
        </div>

        

        <div className="flex flex-wrap -mx-3 mb-4">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label htmlFor="">Profile Image</label>
            <input
              onChange={onChangeProfile}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="file"
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label htmlFor="">Upload Resume</label>
            <input
              onChange={onChangeResume}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
            />
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="abc@mail.com"
            />
            <p className="text-grey-500 text-xs italic">
              Please fill out all fields.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Phone Number
            </label>
            <PhoneInput
              defaultCountry="NG"
              value={mobile}
              onChange={setMobile}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder=""
            />
          </div>
        </div>


        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 001
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 001
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 002
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 002
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 003
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 003
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 004
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 004
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 005
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 005
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 006
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 006
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 007
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 007
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 008
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 008
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 009
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 009
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 0
            </label>
            <input
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Project title should be explanatory!!!.
            </p>
          </div>

          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Image 010
            </label>
            <input
              onChange={onChangeProject}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Charge
            </label>
            <input
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              Should contain only numbers e.g 25000.
            </p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Category
            </label>
            <select
              defaultValue=""
              onChange={getSelected}
              className="block appearance-none uppercase text-sm w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            >
              <option
                className="text-green-500"
                value=""
                defaultValue=""
                disabled
                hidden
              >
                Choose here
              </option>
              <option value="living room">3D Visuals</option>
              <option value="bedroom">Floor Planner</option>
            </select>
          </div>
        </div>


        

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              placeholder=""
            />
            <p className="text-green-500 text-xs italic">
              State your project description here....
            </p>
          </div>
        </div>

        {alert.show && <Alert {...alert} removeAlert={showAlert} />}

        <Link to="/dashboard/architects">
          <button type="button" className="btn clear-btn mr-4">
            cancel
          </button>
        </Link>
        <button onClick={createUser} type="submit" className="btn confirm-btn">
          confirm
        </button>
      </form>
    </section>
  );
};

export default New;
