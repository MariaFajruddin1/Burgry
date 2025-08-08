import Image from "next/image";
import Link from "next/link";
import React from "react";
import BurgerHeader from '@/public/images/header.png';
import menu01 from '@/public/images/Menu01.png'
import menu02 from '@/public/images/Menu02.png'
import menu03 from '@/public/images/Menu03.png'
import { RiMenu3Fill } from "react-icons/ri";
import { ImSpoonKnife } from "react-icons/im";
import { FaDroplet, FaLeaf } from "react-icons/fa6";

export default function Header() {
    return (
        <>
            <div className="pt-8 container">
                {/* Navbar */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <h1 className="text-3xl text-white uppercase font-bold tracking-tight">Bur<span className="text-yellow-500">ger</span></h1>
                    </div>
                    {/* menu and button */}
                    <div className="lg:flex hidden gap-8 items-center">
                        <Link href='/' className="hover:text-yellow-500">Home</Link>
                        <Link href='/' className="hover:text-yellow-500">About Us</Link>
                        <Link href='/' className="hover:text-yellow-500">Menu</Link>
                        <Link href='/' className="hover:text-yellow-500">Contact US</Link>
                        <div>
                            <button className="px-4 py-2 bg-yellow-500 text-black ">Order Now</button>
                        </div>
                    </div>
                    <div className="lg:hidden flex">
                        <RiMenu3Fill size={30} />
                    </div>
                </div>

                {/* Header */}
                <div className="lg:flex justify-between">
                    <div className="lg:w-[50%]">
                        <Image src={BurgerHeader} alt="burger header" width={1000} height={1000} />
                    </div>
                    <div className="lg:w-[50%] place-content-center space-y-5">
                        <div>
                            <h1 className="lg:text-7xl text-4xl uppercase font-bold text-white">enjoy burgry make your tummy happy</h1>
                            <div className="w-50 h-1 bg-yellow-500 mt-4"></div>
                        </div>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam ullam cum vel nihil ad quam! Itaque, ducimus ipsum esse qui neque dolores cumque enim eaque, eos, dolor perferendis ex distinctio.</p>
                        <div className="flex gap-10 pt-5">
                            <div>
                                <ImSpoonKnife size={25} className="text-yellow-500" />
                                <p className="pt-2 text-xl font-semibold">Deicious</p>
                            </div>
                            <div>
                                <FaDroplet size={25} className="text-yellow-500" />
                                <p className="pt-2 text-xl font-semibold">Fresh</p>
                            </div>
                            <div>
                                <FaLeaf size={25} className="text-yellow-500" />
                                <p className="pt-2 text-xl font-semibold">Organic</p>
                            </div>
                        </div>
                        <button className="text-xl mt-4 px-4 py-2 bg-yellow-500 text-black ">Learn More</button>
                    </div>
                </div>

                {/* category box */}
                <div className="lg:flex flex-wrap lg:justify-around justify-center mx-auto mt-10 mb-10">
                    <Image className="cursor-pointer py-8" src={menu01} alt="" width={500} height={500} />
                    <Image className="cursor-pointer py-8" src={menu02} alt="" width={500} height={500} />
                    <Image className="cursor-pointer py-8" src={menu03} alt="" width={500} height={500} />
                </div>
            </div>
        </>
    )
}