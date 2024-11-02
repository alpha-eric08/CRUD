import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "../schema";
import { useEffect, useState } from "react";
import {addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

function Forms() {
    const [imageurl, setImageurl] = useState("")
    const [file, setFile] = useState(null);

    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleUploadimage = (e) => {
    const file = e.target.files[0];
    file && setFile(file);
    }
    useEffect(() => {
        if (!file) return;
        const upload = async () => {
            try {
                const cloudName = "dy97qdksz"
                const uploadPreset = "tgetphpu"
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", uploadPreset);
                const res = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, {
                    method: "POST",
                    body: data,
                })
                const leyroy = await res.json();
                setImageurl(leyroy.secure_url)
                
            } catch (error) {
                console.log(error);
            }
        };
        upload();
    }, [file]);

  const createUser = async (data) => {
    try {
      const userCollectionRef = collection(db, "employees");
      await addDoc(userCollectionRef, {...data,imageurl});
      alert("User Created");
    } catch (error) {
      console.log(error);
      alert("something went wrong");
      return;
    }
    // const isUser = users.filter((user) =>{
    //   return user.email === data.email && user.name === name
    // })
    // if (isUser.length > 0) return alert("User already exists")
  };

  return (
    <div className="px-20 w-full py-16">
      <h1 className="text-2xl font-semibold text-black mb-10 text-center">
        Adjust Profile Settings
      </h1>
      <form onSubmit={handleSubmit(createUser)} className="space-y-5">
        {/* File Upload */}
        <div className="flex items-center gap-5">
          <label
            htmlFor="fileInput"
            className="text-[#1d1d1d] font-medium text-xl"
          >
            File Upload
          </label>
          <input
            type="file"
            id="fileInput"
            placeholder="choose a file"
            className=""
            onChange={handleUploadimage}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 gap-5 ">
          {/* First Column */}
          <div className="space-y-5">
            {/* Full Name */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Full Name
              </label>
              <input
                {...register("fullName")}
                type="text"
                placeholder="Enter your full name"
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              />
              {errors.fullName && (
                <p className="text-red-600">{errors.fullName.message}</p>
              )}
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Email Address
              </label>
              <input
                {...register("email")}
                type="email"
                placeholder="Enter your email address"
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              />
              {errors.email && (
                <p className="text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Password
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="Enter your password"
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              />
              {errors.password && (
                <p className="text-red-600">{errors.password.message}</p>
              )}
            </div>

            {/* Skill Level */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Skill Level
              </label>
              <select
                {...register("skillLevel")}
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              >
                <option value="">Select skill level</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
              {errors.skillLevel && (
                <p className="text-red-600">{errors.skillLevel.message}</p>
              )}
            </div>

            {/* Gender */}
            <div className="space-y-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Gender
              </label>
              <div className="flex flex-col gap-2">
                <div className="space-x-2">
                  <input
                    {...register("gender")}
                    type="radio"
                    id="male"
                    value="male"
                  />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="space-x-2">
                  <input
                    {...register("gender")}
                    type="radio"
                    id="female"
                    value="female"
                  />
                  <label htmlFor="female">Female</label>
                </div>
                <div className="space-x-2">
                  <input
                    {...register("gender")}
                    type="radio"
                    id="other"
                    value="other"
                  />
                  <label htmlFor="other">Other</label>
                </div>
              </div>
              {errors.gender && (
                <p className="text-red-600">{errors.gender.message}</p>
              )}
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-5">
            {/* Phone Number */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Phone Number
              </label>
              <input
                {...register("phone")}
                type="tel"
                placeholder="Enter your phone number"
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              />
              {errors.phone && (
                <p className="text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Bio */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">Bio</label>
              <textarea
                {...register("bio")}
                placeholder="Write here..."
                className="border-2 border-[#B2B2B2] rounded-md p-2.5 h-[153px] resize-none"
              />
            </div>

            {/* Primary Interest */}
            <div className="flex flex-col gap-2">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Primary Interest
              </label>
              <select
                {...register("primaryInterest")}
                className="border-2 border-[#B2B2B2] rounded-md p-2.5"
              >
                <option value="">Select primary interest</option>
                <option value="coding">Coding</option>
                <option value="design">Design</option>
                <option value="photography">Photography</option>
              </select>
              {errors.primaryInterest && (
                <p className="text-red-600">{errors.primaryInterest.message}</p>
              )}
            </div>

            {/* Notifications */}
            <div className="text-sm space-y-4">
              <label className="text-[#1d1d1d] font-medium text-xl">
                Notification
              </label>
              <div className="flex gap-2">
                <input
                  {...register("notifications")}
                  type="checkbox"
                  id="notification1"
                  value="notification1"
                />
                <label htmlFor="notification1">
                  Get notified about system updates
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  {...register("notifications")}
                  type="checkbox"
                  id="notification2"
                  value="notification2"
                />
                <label htmlFor="notification2">
                  Receive reminders for tasks and deadlines
                </label>
              </div>
              <div className="flex gap-2">
                <input
                  {...register("notifications")}
                  type="checkbox"
                  id="notification3"
                  value="notification3"
                />
                <label htmlFor="notification3">
                  Receive invitations to workshops and events
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="w-24 bg-[#434BB4] hover:bg-[#151a63] duration-300 text-white font-medium py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms;
