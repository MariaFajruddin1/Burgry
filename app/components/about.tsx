import React from "react";
import Image from "next/image";
import Burgers02 from '@/public/images/aboutBurger 1.png';
import Burgers01 from '@/public/images/bb.png';
import { FaLeaf } from "react-icons/fa";
import { FaBasketShopping } from "react-icons/fa6";
import { PiChefHatFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { FaThumbsDown } from "react-icons/fa6";

export default function About() {
    return (
        <>
            <div className="container xl:flex justify-between pt-10 pb-40">
                {/* start text */}
                <div className="place-content-center space-y-8">
                    <div className="flex lg:justify-end gap-6">
                        <div>
                            <FaLeaf size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">Natural Ingredients</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex lg:justify-end gap-6">
                        <div>
                            <FaBasketShopping size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">Fresh vegetables & Meet</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex lg:justify-end gap-6">
                        <div>
                            <IoSettingsSharp size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">Best quality products</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                </div>
                {/* center burger images */}
                <div className="">
                    <Image className="mx-auto" src={Burgers01} alt="" width={600} height={600} />
                </div>
                <div className="place-content-center space-y-8">
                    <div className="flex gap-6">
                        <div>
                            <PiChefHatFill size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">World’s best Chef</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <MdDeliveryDining size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">Fastest door delivery</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                    <div className="flex gap-6">
                        <div>
                            <FaThumbsDown size={30} className="text-yellow-500" />
                        </div>
                        <div className="lg:w-[60%] space-y-2">
                            <h4 className="text-3xl font-bold hover:text-yellow-500 ">Ground beef & Low fat</h4>
                            <p className="text-lg">Lorem ipsum dolor sit amet,Ea sed illum facere aperiam sequi optio consec adipisicing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}