"use client"
import { useGetMeQuery, useProfileUpdateMutation } from "@/redux/featured/auth/authApi";
import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';

const Page = () => {
  const { data: getUserdata, error, isLoading, refetch } = useGetMeQuery({})
  const [profileUpdate] = useProfileUpdateMutation()
  const [jsondata, setJsonData] = useState({
    fullName: "",
    phoneNumber: "",
    dateOfBirth: "",
    email: "",
    nationality: "",
    passportNumber: "",
    passportExpiryDate: ""
  });

  const user = getUserdata?.data;

  useEffect(() => {
    if (user) {
      setJsonData({
        fullName: `${user.firstName || ""} ${user.lastName || ""}`,
        email: user.email || "",
        phoneNumber: user.phoneNumber || "",
        dateOfBirth: user.dateOfBirth?.substring(0, 10) || "",
        nationality: user.nationality || "",
        passportNumber: user.passportNumber || "",
        passportExpiryDate: user.passportExpiryDate?.substring(0, 10) || "",
      })
    }
  }, [user])

  const hendleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJsonData({ ...jsondata, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      const nameParts = jsondata.fullName.trim().split(" ");
      const payload = {
        firstName: nameParts.shift() || "",
        lastName: nameParts.join(" ") || "",
        dateOfBirth: new Date(jsondata.dateOfBirth).toISOString(),
        phoneNumber: jsondata.phoneNumber,
        nationality: jsondata.nationality,
        passportNumber: jsondata.passportNumber,
        passportExpiryDate: new Date(jsondata.passportExpiryDate).toISOString()
      }
      await profileUpdate(payload).unwrap();
      refetch()
      toast.success('Profile updated successfully!')
    } catch (error) {
      console.log(error)
      toast.error("Update Failed!");
    }
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-2xl p-8 w-full space-y-6">
        <Skeleton height={30} width={200} /> {/* Title */}
        <div className="grid grid-cols-1 mt-14 md:grid-cols-2 gap-6">
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <div className="mt-10">
          <Skeleton height={30} width={250} /> {/* Passport Title */}
        </div>
        <div className="grid grid-cols-1 mt-18 md:grid-cols-3 gap-6">
          <Skeleton height={40} />
          <Skeleton height={40} />
          <Skeleton height={40} />
        </div>
        <Skeleton height={40} width={150} /> {/* Button */}
      </div>
    )
  }

  if (error) {
    return <p className="text-red-500">Error loading user data</p>
  }

  return (
    <div className="bg-white rounded-2xl p-8 w-full ">
      {/* Personal Information */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-2">
        Personal Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={jsondata.fullName}
            onChange={hendleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={jsondata.email}
            onChange={hendleChange}
            disabled
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none bg-gray-100 text-gray-500 cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={jsondata.phoneNumber}
            onChange={hendleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Date of Birth
          </label>
          <input
            type="date"
            name="dateOfBirth"
            value={jsondata.dateOfBirth}
            onChange={hendleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Passport Information */}
      <h2 className="text-xl font-semibold text-gray-800 mb-6 border-t pt-4">
        Passport Information
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Nationality
    </label>
    <input
      name="nationality"
      value={jsondata.nationality}
      type="text"
      onChange={hendleChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Passport Number
    </label>
    <input
      name="passportNumber"
      value={jsondata.passportNumber}
      type="text"
      onChange={hendleChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>

  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">
      Passport Expiry
    </label>
    <input
      name="passportExpiryDate"
      value={jsondata.passportExpiryDate}
      type="date"
      onChange={hendleChange}
      className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
</div>


      <button
        onClick={handleUpdate}
        className="bg-[#0028A8] text-white font-medium rounded-lg px-6 py-2 hover:bg-blue-700 transition"
      >
        Save Changes
      </button>
    </div>
  );
};

export default Page;
