import React from "react";
import Image from "next/image";
import Burgers02 from '@/public/images/bb.jpg'

export default function Video() {
    return (
        <>
            <div className="pt-15">
                <div className="relative w-full h-[100%] overflow-hidden">
                    {/* background image */}
                    <Image
                        src={Burgers02}
                        alt="Hero banner"
                        fill
                        priority={true}
                        className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    {/* Button */}
                    <div
                        id="container"
                        className="relative z-20 h-full lg:p-30 p-4"
                    >
                        <h1 className="lg:text-5xl text-3xl font-bold uppercase lg:w-[50%]">Get a special offer for your special occasion</h1>
                        <div className="w-50 h-1 bg-yellow-500 mt-4"></div>
                        <p className="text-lg lg:w-[50%] pt-6">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum ipsam quos et sapiente omnis modi repellendus corporis qui blanditiis ducimus perferendis ea, inventore aspernatur soluta rerum? Molestiae accusantium enim ducimus!</p>
                        <div className="text-black cursor-pointer font-bold hover:before:bg-black relative p-3 text-center w-60 my-8 overflow-hidden bg-yellow-500 px-3 transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-yellow-500 hover:before:left-0 hover:before:w-full text-lg uppercase"><span className="relative z-10">Book a Reservation</span></div>
                    </div>
                </div>
            </div>

        </>
    )
}