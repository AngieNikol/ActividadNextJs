"use client";

import { useState, useEffect } from "react";
import Character from "./Characters";

const API_BASE_URL = "https://thesimpsonsapi.com/api";

export default function SimpsonsPage() {
    //const listOfUrls = []
    const [index, setIndex] = useState(1);

    //for(let i = 0; i<=10; i++) {
    //    listOfUrls.push(${API_BASE_URL}/characters/${i});
    //}

    const disminuir = () => {
        if (index > 1) {
            setIndex(index - 1);
        }
    }

    const aumentar = () => {
        setIndex(index + 1);
    }


    return (
        <div className="flex flex-col gap-4 bg-rose-100 w-full h-screen">
            {/*{listOfUrls.map((url) =><Character url={url} key={index}></Character >)}}*/}


            <input type="number" min="1" max="100" className="border text-xl m-4" value={index}
                onChange={(e) => { setIndex(parseInt(e.target.value)) }} />

            <div className="flex gap-4 justify-center">
                <button className="border w-30 h-15 bg-rose-300 font-bold" onClick={disminuir}>anterior</button>

                <Character url={`${API_BASE_URL}/characters/${index}`}></Character>

                <button className="border w-30 h-15 bg-rose-300 font-bold" onClick={aumentar}>siguiente</button>
            </div>
        </div>

    )
}