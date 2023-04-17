import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Home() {
    // const workat =["school", "collage"]
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [currectlyStudying, setCurrectlyStudying] = useState(false);
    const [work, setWork] = useState("");
  return (
    <div>
        <div>
            <h2 className='text-2xl font-semibold mb-8 text-center mt-4'>Hi, I'm Fahim Rimon</h2>
        </div>

        <form className='w-[40%] mx-auto'>
        <div>
            <div className="my-2">
            <label className="font-semibold">
              Are you Currently Studying?
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input
                  onClick={() => setCurrectlyStudying(true)}
                  {...register("isStudying", {
                    required: { value: true},
                  })}
                  type="radio"
                  id="isStudying"
                  name="isStudying"
                  value="true"
                />
                <label htmlFor="isStudying" className="ml-2">
                  Yes, I am studying
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={() => setCurrectlyStudying(false)}
                  {...register("isStudying", {
                    required: { value: true },
                  })}
                  type="radio"
                  id="isNotStudying"
                  name="isStudying"
                  value="false"
                />
                <label htmlFor="isNotStudying" className="ml-2">
                  No, I am not studying
                </label>
              </div>
            </div>
        </div>

        {
            currectlyStudying &&
            <div className="mt-4">
            <label className="font-semibold">
              Are you Currently?
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input
                  onClick={(e) => setWork(e.target.value)}
                  {...register("study", {
                    required: { value: true},
                  })}
                  type="radio"
                  id="studySchool"
                  name="study"
                  value="school"
                />
                <label htmlFor="school" className="ml-2">
                  in school
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={(e) => setWork(e.target.value)}
                  {...register("study", {
                    required: { value: true},
                  })}
                  type="radio"
                  id="studyCollage"
                  name="study"
                  value="collage"
                />
                <label htmlFor="collage" className="ml-2">
                  in collage
                </label>
              </div>
            </div>
        </div>
        }
        
        {
            work === 'school' &&
            <div>
                <div className="my-2">
              <label className="block font-semibold mt-4" htmlFor="schoolName">
                School Name
              </label>
              <input
                className="input input-bordered w-full h-10 mt-4"
                {...register("schoolName", {
                  required: { value: true},
                  pattern: {
                    value: /^[A-Za-z -]+$/
                  },
                })}
                name="schoolName"
                type="text"
                id="schoolName"
                placeholder='Enter School Name'
              />
              
            </div>
            <div className="block mt-4 ">
              <div className="">
                <label className="block font-semibold" htmlFor="grade">
                  Select your grade
                </label>
                <select
                  {...register("grade", {
                    required: { value: true},
                  })}
                  name="grade"
                  id="grade"
                  defaultValue="any"
                  className="h-10 select select-bordered w-full mt-4"
                >
                  <option value="any" selected disabled>
                    --- Select Your grade ---
                  </option>
                  <option value={6}>Six</option>
                  <option value={7}>Seven</option>
                  <option value={8}>Eight</option>
                  <option value={9}>Nine</option>
                  <option value={10}>Ten</option>
                  <option value={11}>Eleven</option>
                  <option value={12}>Twelve</option>
                </select>
              </div>
            </div>
            </div>
        }


        {
            work === 'collage' &&
            <div>
                <div className="my-2">
              <label className="block font-semibold mt-4" htmlFor="schoolName">
                Collage Name
              </label>
              <input
                className="input input-bordered w-full h-10 mt-4"
                {...register("schoolName", {
                  required: { value: true},
                  pattern: {
                    value: /^[A-Za-z -]+$/
                  },
                })}
                name="schoolName"
                type="text"
                id="schoolName"
                placeholder='Enter Collage Name'
              />
              
            </div>
            <div className="block mt-4 ">
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="grade">
                  Select your latest degree
                </label>
                <select
                  {...register("grade", {
                    required: { value: true},
                  })}
                  name="grade"
                  id="grade"
                  defaultValue="any"
                  className="h-10 select select-bordered w-full mt-4"
                >
                  <option value="any" selected disabled>
                    --- Latest degree ---
                  </option>
                  <option value="BSC">BSC</option>
                  <option value="BBA">BBA</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              <div className="">
                <label className="block font-semibold" htmlFor="grade">
                  Select your graduation year
                </label>
                <select
                  {...register("grade", {
                    required: { value: true},
                  })}
                  name="grade"
                  id="grade"
                  defaultValue="any"
                  className="h-10 select select-bordered w-full mt-4"
                >
                  <option value="any" selected disabled>
                    --- Graduation Year ---
                  </option>
                  <option value={2015}>2015</option>
                  <option value={2016}>2016</option>
                  <option value={2017}>2017</option>
                  <option value={2018}>2018</option>
                  <option value={2019}>2019</option>
                  <option value={2020}>2020</option>
                  <option value={2021}>2021</option>
                  <option value={2022}>2022</option>
                  <option value={2023}>2023</option>
                </select>
              </div>
            </div>
            </div>
        }

        </div>
        </form>
    </div>
  )
}

export default Home
