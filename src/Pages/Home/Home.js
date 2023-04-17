import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Home() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [currectlyStudying, setCurrectlyStudying] = useState("");
    const [work, setWork] = useState("");
    const [currentPosition, setCurrentPosition] = useState("");

    // const [userData, setUserData] = useState([]);

    const userDetails = (data) => {
        console.log(data)
        if(data.isStudying==='studying' && data.study==='school'){
            alert("I'm currently: "+ data.isStudying + "\nStudying in: " + data.study + "\nSchool Name: " + data.schoolName + "\nGrade: " + data.grade);
        }else if(data.isStudying==='studying' && data.study==='collage'){
            alert("I'm currently: "+ data.isStudying + "\nStudying in: " + data.study + "\nCollage Name: " + data.schoolName + "\nDegree: " + data.degree + "\nGraduation Year: " + data.graduationYear);
        }else if(data.isStudying==='NotStudying' && data.workingStatus==='Looking for a Job'){
            alert("I'm currently: "+ data.isStudying + "\nNow I'm: " + data.workingStatus + "\nCollage Name: " + data.collageName + "\nDegree: " + data.degree + "\nGraduation Year: " + data.graduationYear);
        }else if(data.isStudying==='NotStudying' && data.workingStatus==='Currently Working'){
            alert("I'm currently: "+ data.isStudying + "\nNow I'm: " + data.workingStatus + "\nCompany Name: " + data.companyName + "\nJob Title: " + data.jobTitle + "\nYear of experience: " + data.yearOfExperience);
        }
        
        
        // setUserData(data);
    };
  return (
    <div>
        <div>
            <h2 className='text-2xl font-semibold mb-8 text-center mt-4'>Hi, I'm Fahim Rimon</h2>
            {/* {userData?.map((user)=> <div>
                <h2>{user.grade}</h2>
                <h2>{user.isStudying}</h2>
                <h2>{user.study}</h2>
                <h2>{user.schoolNam}</h2>
            </div>)} */}
        </div>

        <form className='w-[40%] mx-auto'
        onSubmit={handleSubmit(userDetails)}
        >
        <div>

            {/* currentlty studying? */}
            <div className="my-2">
            <label className="font-semibold">
              Are you Currently Studying?
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input
                  onClick={(e) => setCurrectlyStudying(e.target.value)}
                  {...register("isStudying", {
                    required: { value: true},
                  })}
                  type="radio"
                  name="isStudying"
                  value="studying"
                />
                <label htmlFor="isStudying" className="ml-2">
                  Yes, I am studying
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={(e) => setCurrectlyStudying(e.target.value)}
                  {...register("isStudying", {
                    required: { value: true },
                  })}
                  type="radio"
                  name="isStudying"
                  value="NotStudying"
                />
                <label htmlFor="isNotStudying" className="ml-2">
                  No, I am not studying
                </label>
              </div>
            </div>
        </div>



        {/* if studying */}
        {
            currectlyStudying === "studying" &&
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
         

         {/* school and collage status  */}
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
                  required: { value: true, message: "Please enter school name"},
                  pattern: {
                    value: /^[A-Za-z -]+$/
                  },
                })}
                name="schoolName"
                type="text"
                placeholder='Enter School Name'
              />
              {errors?.schoolName && (
                  <p className="text-red-500">
                    {errors?.schoolName?.message}
                  </p>
                )}
              
            </div>
            <div className="block mt-4 ">
              <div className="">
                <label className="block font-semibold" htmlFor="grade">
                  Select your grade
                </label>
                <select
                  {...register("grade", {
                    required: { value: true, message: "Select your grade"},
                  })}
                  name="grade"
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
                {errors?.grade && (
                  <p className="text-red-500">
                    {errors?.grade?.message}
                  </p>
                )}
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
                placeholder='Enter Collage Name'
              />
              
            </div>
            <div className="block mt-4 ">
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="grade">
                  Select your latest degree
                </label>
                <select
                  {...register("degree", {
                    required: { value: true},
                  })}
                  name="degree"
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
                  {...register("graduationYear", {
                    required: { value: true},
                  })}
                  name="graduationYear"
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

         {/* if not studying */}
        {
            currectlyStudying === "NotStudying" &&
            <div className="mt-4">
            <label className="font-semibold">
              Are you Currently?
            </label>
            <div className="flex justify-between mt-2">
              <div className="flex items-center">
                <input
                  onClick={(e) => setCurrentPosition(e.target.value)}
                  {...register("workingStatus", {
                    required: { value: true},
                  })}
                  type="radio"
                  name="workingStatus"
                  value="Looking for a Job"
                />
                <label htmlFor="school" className="ml-2">
                  Looking for a job
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={(e) => setCurrentPosition(e.target.value)}
                  {...register("workingStatus", {
                    required: { value: true},
                  })}
                  type="radio"
                  name="workingStatus"
                  value="Currently Working"
                />
                <label htmlFor="collage" className="ml-2">
                  Currently working
                </label>
              </div>
            </div>
        </div>
        }

        {/* if looking job */}

        {
            currentPosition === 'Looking for a Job' &&
            <div>
                <div className="my-2">
              <label className="block font-semibold mt-4" htmlFor="schoolName">
                Collage Name
              </label>
              <input
                className="input input-bordered w-full h-10 mt-4"
                {...register("collageName", {
                  required: { value: true},
                  pattern: {
                    value: /^[A-Za-z -]+$/
                  },
                })}
                name="collageName"
                type="text"
                placeholder='Enter Collage Name'
              />
              
            </div>
            <div className="block mt-4 ">
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="grade">
                  Select your latest degree
                </label>
                <select
                  {...register("degree", {
                    required: { value: true},
                  })}
                  name="degree"
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
                  {...register("graduationYear", {
                    required: { value: true},
                  })}
                  name="graduationYear"
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

        {/* if working */}
        {
            currentPosition === 'Currently Working' &&
            <div>
                <div className="my-2">
              <label className="block font-semibold mt-4" htmlFor="schoolName">
                Company Name
              </label>
              <input
                className="input input-bordered w-full h-10 mt-4"
                {...register("companyName", {
                  required: { value: true},
                  pattern: {
                    value: /^[A-Za-z -]+$/
                  },
                })}
                name="companyName"
                type="text"
                placeholder='Your Company Name'
              />
              
            </div>
            <div className="block mt-4 ">
              <div className="mb-4">
                <label className="block font-semibold" htmlFor="grade">
                  Select your Experience
                </label>
                <select
                  {...register("yearOfExperience", {
                    required: { value: true},
                  })}
                  name="yearOfExperience"
                  defaultValue="any"
                  className="h-10 select select-bordered w-full mt-4"
                >
                  <option value="any" selected disabled>
                    --- Years of experience ---
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                  <option value="4">Four</option>
                </select>
              </div>

              <div className="">
                <label className="block font-semibold" htmlFor="grade">
                  Select your job title
                </label>
                <select
                  {...register("jobTitle", {
                    required: { value: true},
                  })}
                  name="jobTitle"
                  defaultValue="any"
                  className="h-10 select select-bordered w-full mt-4"
                >
                  <option value="any" selected disabled>
                    --- Job title ---
                  </option>
                  <option value="Frontend web Developer">Front-End Developer</option>
                  <option value="Backend Developer">Backend Developer</option>
                  <option value="MERN Stack Developer">MERN Stack Developer</option>
                </select>
              </div>
            </div>
            </div>
        }
        
        </div>

        <button
          className="button mt-4 font-semibold uppercase text-black bg-blue-400 hover:bg-blue-500 text-lg px-4 py-2 w-full"
          type="submit"
        >
          Submit
        </button>
        </form>
    </div>
  )
}

export default Home
