import React from "react";
import Image from "next/image";
import Burgers02 from '@/public/images/burgers02.jpg'
import { AiOutlinePlus } from "react-icons/ai";

const burgersList = [
    {
        name: 'Burger 01',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 02',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 03',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 04',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 05',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 06',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 07',
        image: Burgers02,
        price: 100
    },
    {
        name: 'Burger 08',
        image: Burgers02,
        price: 100
    }
];


export default function Menu() {
    return (
        <>
            <div className="container">
                <h1 className="text-5xl uppercase text-center font-bold">Explorer Our Best <span className="text-yellow-500">burgers</span></h1>
                <p className="text-center lg:w-[50%] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sit, deserunt aperiam atque nisi rem doloribus aspernatur dolorum ipsa, consectetur aut ipsum ea? Rerum, sit ea est explicabo neque quaerat!</p>
                <div className="flex flex-wrap justify-center gap-10 mt-10">
                    {burgersList.map((burgerItem) => (
                        <div key={burgerItem.name} className="cursor-pointer">
                            <Image src={burgerItem.image} alt="" width={300} height={300} className="w-full" />
                            <div className="flex justify-between items-center">
                                <p className="text-2xl ">{burgerItem.name}</p>
                                <p className="text-yellow-500 text-xl">{burgerItem.price}$</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}