import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";

export default function UserProfile() {
  const [name, setName] = useState("");
  const [enrollment, setEnrollment] = useState("");
  const [departmentCode, setDepartmentCode] = useState("");
  const [departmentName, setDepartmentName] = useState("");
  const [course, setCourse] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Update the user's profile information

    const user = auth.currentUser;
    const userRef = collection(db, "users", user.uid);
    userRef.update({
      name,
      enrollment,
      department: {
        code: departmentCode,
        name: departmentName,
      },
      course,
      email,
      phone,
    });

    // Add a new document in collection "users"

    try {
      const docRef = await addDoc(collection(db, "users"), {
        name,
        enrollment,
        department: {
          code: departmentCode,
          name: departmentName,
          course,
        },
        email,
        phone,
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const auth = getAuth();
  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Sign-out successful.");
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Profile
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="shadow sm:overflow-hidden sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Enrollment Number
                      </label>
                      <div className="mt-2 flex rounded-md shadow-sm">
                        <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                          AX1020999022
                        </span>
                        <input
                          onChange={(e) => setEnrollment(e.target.value)}
                          value={enrollment}
                          type="text"
                          className="block w-full flex-1 rounded-none rounded-r-md border-0 py-2.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          placeholder="EnrollMent Number"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="about"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Course
                    </label>
                    <div className="mt-2">
                      <input
                        type="text"
                        onChange={(e) => setCourse(e.target.value)}
                        value={course}
                        className="mt-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        placeholder="Course"
                        defaultValue={""}
                      />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Brief description for your profile. URLs are hyperlinked.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Photo
                    </label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                        <svg
                          className="h-full w-full text-gray-300"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </span>
                      <button
                        type="button"
                        className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                      >
                        Change
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Cover photo
                    </label>
                    <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input
                              id="file-upload"
                              name="file-upload"
                              type="file"
                              className="sr-only"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone
                      </label>
                      <input
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="phone"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Name
                      </label>
                      <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-4">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email address
                      </label>
                      <input
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="text"
                        name="email-address"
                        id="email-address"
                        autoComplete="email"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="country"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Country
                      </label>
                      <select
                        id="country"
                        name="country"
                        autoComplete="country-name"
                        className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                      </select>
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street-address"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Department
                      </label>
                      <input
                        onChange={(e) => setDepartmentCode(e.target.value)}
                        value={departmentCode}
                        type="text"
                        name="street-address"
                        id="street-address"
                        autoComplete="street-address"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Department
                      </label>
                      <input
                        onChange={(e) => setDepartmentName(e.target.value)}
                        value={departmentName}
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="address-level2"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        id="region"
                        autoComplete="address-level1"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">
                Notifications
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Decide which communications you'd like to receive and how.
              </p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                  <fieldset>
                    <legend className="sr-only">By Email</legend>
                    <div
                      className="text-sm font-semibold leading-6 text-gray-900"
                      aria-hidden="true"
                    >
                      By Email
                    </div>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="comments"
                            name="comments"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="comments"
                            className="font-medium text-gray-900"
                          >
                            Comments
                          </label>
                          <p className="text-gray-500">
                            Get notified when someones posts a comment on a
                            posting.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="candidates"
                            className="font-medium text-gray-900"
                          >
                            Candidates
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate applies for a job.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex h-6 items-center">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                        </div>
                        <div className="ml-3 text-sm leading-6">
                          <label
                            htmlFor="offers"
                            className="font-medium text-gray-900"
                          >
                            Offers
                          </label>
                          <p className="text-gray-500">
                            Get notified when a candidate accepts or rejects an
                            offer.
                          </p>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="contents text-sm font-semibold leading-6 text-gray-900">
                      Push Notifications
                    </legend>
                    <p className="text-sm text-gray-500">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="mt-4 space-y-4">
                      <div className="flex items-center">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-everything"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-email"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
