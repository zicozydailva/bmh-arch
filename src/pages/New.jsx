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
  const [charge, setCharge] = useState("");
  const [profileImage, setProfileImg] = useState("");
  const [resumeUrl, setResumeImg] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectImage, setProjectImg] = useState("");
  const [projectTitle1, setProjectTitle1] = useState("");
  const [projectImage1, setProjectImg1] = useState("");
  const [projectTitle2, setProjectTitle2] = useState("");
  const [projectImage2, setProjectImg2] = useState("");
  const [projectTitle3, setProjectTitle3] = useState("");
  const [projectImage3, setProjectImg3] = useState("");
  const [projectTitle4, setProjectTitle4] = useState("");
  const [projectImage4, setProjectImg4] = useState("");
  const [projectTitle5, setProjectTitle5] = useState("");
  const [projectImage5, setProjectImg5] = useState("");
  const [projectTitle6, setProjectTitle6] = useState("");
  const [projectImage6, setProjectImg6] = useState("");
  const [projectTitle7, setProjectTitle7] = useState("");
  const [projectImage7, setProjectImg7] = useState("");
  const [projectTitle8, setProjectTitle8] = useState("");
  const [projectImage8, setProjectImg8] = useState("");
  const [projectTitle9, setProjectTitle9] = useState("");
  const [projectImage9, setProjectImg9] = useState("");
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
    setProjectTitle1("");
    setProjectImg1("");
    setProjectTitle2("");
    setProjectImg2("");
    setProjectTitle3("");
    setProjectImg3("");
    setProjectTitle4("");
    setProjectImg4("");
    setProjectTitle5("");
    setProjectImg5("");
    setProjectTitle6("");
    setProjectImg6("");
    setProjectTitle7("");
    setProjectImg7("");
    setProjectTitle8("");
    setProjectImg8("");
    setProjectTitle9("");
    setProjectImg9("");
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
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
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
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg(file?.secure_url);
  };

  const onChangeProfile = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProfileImg(file?.secure_url);
  };

  const onChangeProject1 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg1(file?.secure_url);
  };
  const onChangeProject2 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg2(file?.secure_url);
  };
  const onChangeProject3 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg3(file?.secure_url);
  };
  const onChangeProject4 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg4(file?.secure_url);
  };
  const onChangeProject5 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg5(file?.secure_url);
  };
  const onChangeProject6 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg6(file?.secure_url);
  };
  const onChangeProject7 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg7(file?.secure_url);
  };
  const onChangeProject8 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg8(file?.secure_url);
  };
  const onChangeProject9 = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "ugypxmkm");
    data.append("cloud_name", "thevetdoctor");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/thevetdoctor/image/upload",
      {
        method: "post",
        body: data,
      }
    );
    const file = await res.json();
    setProjectImg9(file?.secure_url);
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
          email,
          mobile,
          description,
          category,
          profileImage,
          resumeUrl,
          charge,
          projectTitle,
          projectImage,
          projectTitle1,
          projectImage1,
          projectTitle2,
          projectImage2,
          projectTitle3,
          projectImage3,
          projectTitle4,
          projectImage4,
          projectTitle5,
          projectImage5,
          projectTitle6,
          projectImage6,
          projectTitle7,
          projectImage7,
          projectTitle8,
          projectImage8,
          projectTitle9,
          projectImage9,
        },
      });

      console.log(data);
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

        <div className="flex flex-wrap -mx-3 mb-6">
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
              <option value="3d-visuals">3D Visuals</option>
              <option value="floor-planner">Floor Planner</option>
            </select>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Charge
            </label>
            <input
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-grey-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="E.g ₦30,000 to ₦50,000"
            />
            <p className="text-green-500 text-xs italic">
              Should contain only numbers e.g 25000.
            </p>
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
              value={projectTitle1}
              onChange={(e) => setProjectTitle1(e.target.value)}
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
              onChange={onChangeProject1}
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
              value={projectTitle2}
              onChange={(e) => setProjectTitle2(e.target.value)}
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
              onChange={onChangeProject2}
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
              value={projectTitle3}
              onChange={(e) => setProjectTitle3(e.target.value)}
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
              onChange={onChangeProject3}
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
              value={projectTitle4}
              onChange={(e) => setProjectTitle4(e.target.value)}
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
              onChange={onChangeProject4}
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
              value={projectTitle5}
              onChange={(e) => setProjectTitle5(e.target.value)}
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
              onChange={onChangeProject5}
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
              value={projectTitle6}
              onChange={(e) => setProjectTitle6(e.target.value)}
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
              onChange={onChangeProject6}
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
              value={projectTitle7}
              onChange={(e) => setProjectTitle7(e.target.value)}
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
              onChange={onChangeProject7}
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
              value={projectTitle8}
              onChange={(e) => setProjectTitle8(e.target.value)}
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
              onChange={onChangeProject8}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Project Title 010
            </label>
            <input
              value={projectTitle9}
              onChange={(e) => setProjectTitle9(e.target.value)}
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
              onChange={onChangeProject9}
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="file"
              placeholder="080* *** *123"
            />
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
