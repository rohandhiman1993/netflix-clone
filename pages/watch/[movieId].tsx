import React from "react";
import useMovie from "@/hooks/useMovie";
import { useRouter } from "next/router";
import {AiOutlineArrowLeft} from "react-icons/ai"

const Watch = () =>{
    const router = useRouter();
    const {movieId} = router.query;
    
    const {data} = useMovie(movieId as string);
    return(
        <div className="h-screen w-screen bg-black">
            <nav onClick={() => router.push("/")} className="
               cursor-pointer fixed w-full p-4 z-10 flex flex-row items-center gap-8 bg-black bg-opacity-70
            ">
                <AiOutlineArrowLeft className="text-white" size={40} />
                <p className="text-white text-1xl md:text-3xl font-bold">Watching <span className="font-light">{data?.title}</span></p>
            </nav>    
            <video
            className="h-full w-full"
            autoPlay
            controls
            src={data?.videoUrl} />

        </div>
    )
}

export default Watch;   