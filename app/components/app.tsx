import React from "react";
import Image from "next/image";
import Mobile from '@/public/images/mobile.jpg';
import { FaApple, FaGooglePlay } from "react-icons/fa";

export default function App() {
    return (
        <>
            <div className="container">
                <div className="lg:flex justify-between lg:w-[80%] mx-auto gap-10 my-15">
                    <div className="lg:w-[50%]">
                        <Image className="rounded-2xl" src={Mobile} alt="" width={1000} height={1000} />
                    </div>
                    <div className="lg:w-[50%]">
                        <p className="text-gray-500 text2xl">Easy way to use mobile app</p>
                        <h1 className="text-5xl font-bold">Download our mobile apps today</h1>
                        <p className="text-xl pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, voluptate assumenda optio non sint nemo quod mollitia veniam! Voluptatibus dolor nisi enim quam perspiciatis.</p>
                        <div className="md:flex gap-5">
                            <div className="flex mt-5 justify-around items-center rounded-lg gap-3 bg-white px-2 py-1 text-black">
                                <div>
                                    <FaApple size={35} />
                                </div>
                                <div>
                                    <p className="text-sm">Download on the</p>
                                    <p className="text-lg">App Store</p>
                                </div>
                            </div>
                            <div className="flex mt-5 justify-around items-center rounded-lg gap-3 border border-white px-2 py-1 text-white">
                                <div>
                                    <FaGooglePlay size={30} />
                                </div>
                                <div>
                                    <p className="text-sm">GET IT ON</p>
                                    <p className="text-lg">Google Play</p>
                                </div>
                            </div>
                        </div>
                        <button className="mt-5 rounded-full border border-gray-100 px-3 py-2">Or</button>
                        <div className="mt-5">
                            <label className="text-2xl">Enter your email to get download link</label>
                            <div className="flex lg:w-120 mt-3">
                                <input
                                    type="email"
                                    placeholder="Enter email"
                                    className="w-full rounded-bl-lg text-black rounded-tl-lg bg-white placeholder:text-black p-3 placeholder:text-lg"
                                />
                                <button className="rounded-tr-lg rounded-br-lg text-white text-xl w-40 bg-yellow-500">Get link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}