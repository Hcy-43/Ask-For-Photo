"use client"
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState();
  const [place, setPlace] = useState();
  const [tosay, setTosay] = useState("Nothing");
  async function sendEmail() {

    console.log(name)
    const msg = { name, place, tosay };
    document.getElementById('btn').disabled = true;
    await emailjs.send('service_247zntp', 'template_kuy8zeh', msg, 'Ax8ie4YfPfX8l9z78')
      .then((result) => {
        router.push('/success')
      }, (error) => {
        document.getElementById('btn').disabled = false;
        console.log(error.text);
      });
  }
  return (
    <div className='flex flex-col justify-start items-center p-5 pt-8 bg-slate-700 h-screen'>
      <div className="text-3xl font-semibold m-8">
        許群佑<br></br>
        給我照片!!
      </div>
      <div className='flex flex-col flex-start'>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={(e) => setName(e.target.value)} type="text" name="sender" id="sender" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="sender" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">我是誰</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={(e) => setPlace(e.target.value)} type="text" name="place" id="place" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="place" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">什麼時候的照片</label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input onChange={(e) => setTosay(e.target.value)} type="text" name="place" id="place" className="block py-2.5 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
          <label htmlFor="place" className="peer-focus:font-medium absolute text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">其他想說的 (Optional)</label>
        </div>

        <button id='btn' type="submit" onClick={sendEmail} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">給我！</button>
      </div>

    </div>
  );
};