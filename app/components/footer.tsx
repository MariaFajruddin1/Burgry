import React from "react";
import { FaPhoneAlt, FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <div className="container">
                <div className="flex flex-wrap justify-between py-8">
                    <div className="w-80 pt-3">
                        <h1 className="text-3xl text-white uppercase font-bold tracking-tight">Bur<span className="text-yellow-500">ger</span></h1>
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. debitis eum nisi consequuntur cupiditate itaque!</p>
                    </div>
                    <div className="pt-3">
                        <h5 className="text-xl font-bold uppercase">Support</h5>
                        <p className="text-lg pt-1">FAQ's</p>
                        <p className="text-lg">Privacy Policy</p>
                        <p className="text-lg">Term & Condition</p>
                        <p className="text-lg">Contact</p>
                    </div>
                    <div className="pt-3">
                        <h5 className="text-xl font-bold uppercase">Phone</h5>
                        <p className="flex gap-2 items-center text-lg pt-1"><FaPhoneAlt size={18} className="text-yellow-500" />0123456789</p>
                        <h5 className="text-xl font-bold uppercase pt-3">Email</h5>
                        <p className="flex gap-2 items-center text-lg pt-1"><MdEmail size={18} className="text-yellow-500" /> contact@burgry.com</p>
                    </div>
                    <div className="pt-3">
                        <h5 className="text-xl font-bold uppercase">Address</h5>
                        <p className="flex gap-2 items-center text-lg pt-1"><FaLocationDot size={18} className="text-yellow-500" /> Lahore, Pakistan</p>
                        <h5 className="text-xl font-bold uppercase pt-3">Follow us</h5>
                        <div className="flex gap-4 text-lg pt-1 text-yellow-500">
                            <FaFacebook />
                            <RiInstagramFill />
                            <FaYoutube />
                            <FaTwitter />
                        </div>
                    </div>
                </div>
                {/* last footer line */}
                <div className="flex flex-wrap justify-between border-t">
                    <p className="text-lg py-4">Burger Templete Design by Maria</p>
                    <p className="text-lg py-4">copyright © 2025. All rights reserved</p>
                </div>
            </div>

        </>
    )
}