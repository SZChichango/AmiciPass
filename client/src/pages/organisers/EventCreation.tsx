/** @format */

import React, { useEffect, useState } from "react";
import "./eventCreation.css";
import HeaderOrg from "../../components/organisers/HeaderOrg";
import SideNavOrg from "../../components/organisers/SideNavOrg";
import Ticket from "../../components/Ticket";
import axios from "axios";

const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [venue, setVenue] = useState("");
  const [address, setAddress] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (selectedImage) {
      const previewUrl = URL.createObjectURL(selectedImage);
      document.documentElement.style.setProperty(
        "--ticket-image",
        `url(${previewUrl})`
      );
      return () => URL.revokeObjectURL(previewUrl); // Clean up
    }
  }, [selectedImage]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add form submission logic here
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/create-event",
        {
          eventName,
          date,
          startTime,
          endTime,
          venue,
          address,
          capacity,
          selectedImage,
          description,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <HeaderOrg />
      <main className="main-container__event flex">
        <SideNavOrg />
        <div className="flex items-center justify-center">
          <div className="mx-auto w-[600px] max-w-[600px] bg-white pt-28">
            <form
              className="max-w-[600px] w-full"
              action="https://formbold.com/s/FORM_ID"
              method="POST"
              onSubmit={handleSubmit}
            >
              <div className="mb-5">
                <label
                  htmlFor="event-name"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Event Name:
                </label>
                <input
                  type="text"
                  name="event-name"
                  id="event-name"
                  placeholder="Amici Fest"
                  value={eventName}
                  onChange={(e) => setEventName(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date:
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="startTime"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Start Time:
                </label>
                <input
                  type="time"
                  name="startTime"
                  id="startTime"
                  value={startTime}
                  onChange={(e) => setStartTime(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="endTime"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  End Time:
                </label>
                <input
                  type="time"
                  name="endTime"
                  id="endTime"
                  value={endTime}
                  onChange={(e) => setEndTime(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="location"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Venue:
                </label>
                <input
                  type="text"
                  name="venue"
                  id="venue"
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="location"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Location:
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label
                  htmlFor="capacity"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Venue Capacity
                </label>
                <select
                  name="capacity"
                  id="capacity"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                >
                  <option value="">---Select Capacity---</option>
                  <option value="1-50">1-50</option>
                  <option value="51-100">51-100</option>
                  <option value="101-200">101-200</option>
                  <option value="201-500">201-500</option>
                  <option value="501-1000">501-1000</option>
                  <option value="1001-2000">1001-2000</option>
                </select>
              </div>
              <div className="mb-5">
                <label
                  htmlFor="description"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Description
                </label>
                <textarea
                  name="description"
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white
                py-3 px-6 text-base font-medium text-[#6B7280] outline
                -none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
                <small>Max 150 characters!</small>
              </div>
              <div className="mb-6 pt-4">
                <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                  Upload File
                </label>
                <div className="mb-8">
                  <input
                    type="file"
                    name="file"
                    id="file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                  <label
                    htmlFor="file"
                    className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
                  >
                    <div>
                      <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                        Drop files here
                      </span>
                      <span className="mb-2 block text-base font-medium text-[#6B7280]">
                        Or
                      </span>
                      <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
                        Browse
                      </span>
                    </div>
                  </label>
                </div>
                {preview && (
                  <div
                    className="image"
                    style={{ backgroundImage: `url(${preview})` }}
                  ></div>
                )}
                <div className="ticket-container">
                  <Ticket
                    eventName={eventName}
                    date={date}
                    startTime={startTime}
                    endTime={endTime}
                    venue={venue}
                    address={address}
                  />
                </div>
                <div className="rounded-md bg-[#F5F7FB] py-4 px-8">
                  <div className="flex items-center justify-between">
                    <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                      {selectedImage ? selectedImage.name : "No file selected"}
                    </span>
                    <button className="text-[#07074D]">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                          fill="currentColor"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="relative mt-5 h-[6px] w-full rounded-lg bg-[#E2E5EF]">
                    <div className="progress__bar absolute left-0 right-0 h-full w-[75%] rounded-lg "></div>
                  </div>
                </div>
              </div>
              <div>
                <button className="create-event__btn hover:shadow-form w-full rounded-md py-3 px-8 text-center text-base font-semibold text-white outline-none">
                  Send File
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default EventCreation;
