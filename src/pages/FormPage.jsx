import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function FormPage({ setStudent }) {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const getFormData = (data) => {
    console.log(data);

    setStudent((prev) => {
      return { ...prev, ...data };
    });

    navigate("/certificate");
  };
  
  return (
    <div className="flex items-center justify-center p-12">
      <div className="mx-auto w-full max-w-[550px] bg-white">
        <form onSubmit={handleSubmit(getFormData)}>
          <div className="mb-5">
            <label
              htmlFor="fullname"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              id="fullname"
              required
              {...register("fullname")}
              placeholder="Full Name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="specialization_name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Specialization name
            </label>
            <input
              type="text"
              name="specialization_name"
              id="specialization_name"
              required
              {...register("specialization_name")}
              placeholder="Enter your specialization name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="boss_name"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Boss name
            </label>
            <input
              type="text"
              name="boss_name"
              id="boss_name"
              required
              placeholder="Enter your boss name"
              {...register("boss_name")}
              defaultValue={"Ashurov I.A"}
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
          </div>
          <div className="-mx-3 flex flex-wrap">
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="from"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  from
                </label>
                <input
                  type="date"
                  name="from"
                  id="from"
                  required
                  {...register("from")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
            <div className="w-full px-3 sm:w-1/2">
              <div className="mb-5">
                <label
                  htmlFor="to"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  To
                </label>
                <input
                  type="date"
                  name="to"
                  id="to"
                  required
                  {...register("to")}
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
            </div>
          </div>

          <div className="mb-5 pt-3">
            <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
              Certificate Details
            </label>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="diplom_number"
                    id="diplom_number"
                    required
                    placeholder="Enter diplom number"
                    {...register("diplom_number")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="kredit_number"
                    id="kredit_number"
                    required
                    placeholder="Enter kredit number"
                    {...register("kredit_number")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5" title="createdAt">
                  <input
                    type="date"
                    name="createdAt"
                    id="createdAt"
                    required
                    {...register("createdAt")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <input
                    type="text"
                    name="record_number"
                    id="record_number"
                    required
                    placeholder="record number"
                    {...register("record_number")}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
              Create Certificate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
