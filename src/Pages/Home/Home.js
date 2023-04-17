import React, { useState } from 'react'
import { useForm } from 'react-hook-form';

function Home() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [currectlyStudying, setCurrectlyStudying] = useState(false);
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
                  onClick={() => setCurrectlyStudying(true)}
                  {...register("isStudying", {
                    required: { value: true, message: "select one of them" },
                  })}
                  type="radio"
                  id="isStudying"
                  name="isStudying"
                  value="true"
                />
                <label htmlFor="isStudying" className="ml-2">
                  in school
                </label>
              </div>
              <div className="flex items-center">
                <input
                  onClick={() => setCurrectlyStudying(false)}
                  {...register("isStudying", {
                    required: { value: true, message: "select one of them" },
                  })}
                  type="radio"
                  id="isNotStudying"
                  name="isStudying"
                  value="false"
                />
                <label htmlFor="isNotStudying" className="ml-2">
                  in collage
                </label>
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
