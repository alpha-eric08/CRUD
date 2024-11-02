import { BsFillEyeFill, BsPerson } from "react-icons/bs";
import { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const userCollectionRef = collection(db, "employees");
  // Display all users
  useEffect(() => {
    onSnapshot(userCollectionRef, (snapshot) => {
      setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);

  return (
    <>
      {selectedUser ? (
        <div className="px-16 py-16 w-full flex gap-20">
          <div className="space-y-10 w-[296px]">
            {/* Profile Image */}
            <div className="flex w-[296px] h-[254px] overflow-hidden rounded-md">
              <img
                className=" object-cover h-full w-full "
                src={selectedUser.imageurl}
                alt=""
              />
            </div>

            {/* Skills */}
            <div className="space-y-5 ">
              <div className="flex gap-2">
                <h1 className="font-medium text-xl  text-[#7F7F7F]">SKILL </h1>
                <p className="border-b h-[21px] w-full border-[#7F7F7F]"></p>
              </div>
              <h2 className="font-medium text-xl ">Graphic Designer</h2>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliqu
              </p>
            </div>

            {/* SKILL LEVEL */}
            <div className="space-y-5 ">
              <div className="flex">
                <h1 className="font-medium text-xl w-[190px] text-[#7F7F7F]">
                  SKILL LEVEL{" "}
                </h1>
                <p className="border-b h-[21px] w-full border-[#7F7F7F]"></p>
              </div>
              <h2 className="font-medium text-xl ">{selectedUser.skillLevel}</h2>
              <p className="text-sm font-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliqu
              </p>
            </div>
          </div>

          {/* 2nd part */}
          <div className="space-y-7  w-full">
            {/* Name and Position */}
            <div>
              <h1 className="font-semibold text-2xl">{selectedUser.fullName}</h1>
              <h2 className="font-medium text-[#323232] text-lg">
                Product Designer
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-2 w-[430px]">
              <h3 className="text-[#7F7F7F] font-medium text-base">
                BIOGRAPHY
              </h3>
              <p>
              {selectedUser.bio}
              </p>
            </div>
            {/* buttons */}
            <div className="font-medium text-base space-x-5">
              <button className="">Send Message</button>
              <button className="text-[#1c259b] p-2 rounded bg-[#F3F3F3]">
                Contact
              </button>
              <button className="text-[#7F7F7F]">Report Users</button>
            </div>

            <div className="flex gap-5 w-[100%] border-b-2 border-[#C1C1C1]">
              <div className="text-[#7F7F7F] flex items-center text-xl font-medium gap-2">
                <BsFillEyeFill />
                <p>Timeline</p>
              </div>
              <div className="text-black flex items-center text-xl font-medium gap-2">
                <BsPerson />
                <p>About</p>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-[#7F7F7F] font-medium my-8 text-xl">
                CONTACT INFORMATION
              </h3>
              <ul className="space-y-5 ">
                <li className="grid grid-cols-2 w-6/12">
                  <p className="font-medium text-xl">Phone:</p>
                  <a href="#" className="text-[#0012FF] font-normal text-xl">
                  {selectedUser.phone}
                  </a>
                </li>
                <li className="grid grid-cols-2 w-6/12">
                  <p className="font-medium text-xl">Email:</p>
                  <a href="#" className="text-[#0012FF] font-normal text-xl">
                  {selectedUser.email}
                  </a>
                </li>
                <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                  <p>Interest:</p>
                  <p>{selectedUser.primaryInterest}</p>
                </li>
              </ul>
            </div>

            {/* Basic Info */}
            <div>
              <h3 className="text-[#7F7F7F] font-medium my-8 text-xl">
                BASIC INFORMATION
              </h3>
              <ul className="space-y-5 ">
                <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                  <p>Joined Date:</p>
                  <p>June 15, 2024</p>
                </li>
                <li className="grid grid-cols-2 w-6/12 font-medium text-xl">
                  <p>Gender:</p>
                  <p>{selectedUser.gender}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        <div className="px-16 py-16 w-full flex max-h-96  overflow-y-auto gap-20">
          {users.map((user) => (
            <div
              onClick={() => setSelectedUser(user)}
              className="flex gap-2"
              key={user.id}
            >
              <img
                src={user?.imageurl}
                alt="profil"
                className="h-10 w-10 rounded-full"
              />
              <div>
                <h1 className="font-medium text-xl">{user?.fullName}</h1>
                <p className="text-[#7F7F7F] font-normal text-base">
                  Product Designer
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Profile;
