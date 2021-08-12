import React from "react";
import image from "../emerald.jpg";

export default function Home(){
    return(
        <main>
            <img 
            src={image}
            alt="Emerald"
            className="absolsute object-cover w-full h-full"
            />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-6xl text-gold-100 font-bold cursive leading-none lg: leading-snug home-name">Hello. I'm Adesegun Sulaiman Kukoyi.</h1>
            </section>
        </main>
    )
}