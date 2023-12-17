"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

function Hero() {

  const router = useRouter();

  const [searchURL, setSearchURL] = useState();

  const onBtnSearchClicked = () =>{
    console.log("clicked",searchURL);

  }

  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Welcome to Review<br /> Processing
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            we believe in the power of authentic voices. Our platform is dedicated to collecting, processing, and presenting user reviews that matter. Whether you're seeking insights on the latest products, services, or experiences, you're in the right place.
          </Typography>
          <div className="grid">
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input onChange={(e)=>setSearchURL(e.target.value)} color="gray" label="search any product (use url)" size="lg" />
              {/* <Button onClick={onBtnSearchClicked} color="gray" className="w-full px-4 md:w-[12rem]">
                search
              </Button> */}
              <Link href={{
                pathname:"/review",
                query:{search_input : searchURL}
              }} className="w-full px-4 md:w-[12rem] bg-black text-white text-xl rounded-md flex justify-center items-center">search</Link>
            </div>
          </div>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="https://thesocialmediamonthly.com/wp-content/uploads/2020/11/df453we.png"
          className="h-[32rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
