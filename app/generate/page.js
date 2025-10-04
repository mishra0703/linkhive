"use client";

import React, { useState , Suspense } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSearchParams, useRouter } from "next/navigation";

function GenerateForm() {
  const searchParams = useSearchParams();
  const [links, setLinks] = useState([{ link: "", linktext: "" }]);
  const [social, setSocial] = useState([
    { yt: "", insta: "", github: "", linkedin: "", twitter: "" },
  ]);
  const [handle, sethandle] = useState(searchParams.get("handle") || "");
  const [name, setname] = useState("");
  const [profilepic, setprofilepic] = useState("");
  const [description, setdescription] = useState("");

  const router = useRouter();

  const handleChange = (index, link, linktext) => {
    setLinks((prevLinks) => {
      return prevLinks.map((item, i) => {
        if (i == index) {
          return { link, linktext };
        } else {
          return item;
        }
      });
    });
  };

  const addLink = () => {
    setLinks(links.concat([{ link: "", linktext: "" }]));
  };

  const createHive = async () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const filteredLinks = links.filter(
      (item) => item.link.trim() !== "" && item.linktext.trim() !== ""
    );

    const raw = JSON.stringify({
      links: filteredLinks,
      handle: handle.toLowerCase(),
      name: name,
      profilepic: profilepic,
      desc: description,
      social: social[0],
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const data = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/api/add`,
      requestOptions
    );
    const result = await data.json();

    if (result.success) {
      toast.success(result.message, {
        position: "bottom-center",
      });
      setLinks([{ link: "", linktext: "" }]);
      setSocial([{ yt: "", insta: "", github: "", linkedin: "", twitter: "" }]);
      setname("");
      sethandle("");
      setprofilepic("");
      setdescription("");

      setTimeout(() => {
        router.push(`/${handle}`);
      }, 5000);
    } else {
      toast.error(result.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="bg-pink-300 w-full flex min-h-screen">
      <div className="w-1/2 flex flex-col items-start pl-25 mt-45 mb-30 max-sm:w-full max-sm:px-4">
        <div className="slogan mb-6 text-slate-700 text-6xl max-sm:text-center max-sm:mb-10 font-[800] font-zain">
          <span className="w-full">Generate your LinkHive</span>
        </div>
        <div className="font-poppins text-xl font-medium">
          Step 1 : Claim your handle
        </div>
        <div className="w-full my-5 flex gap-8 items-center">
          <input
            type="text"
            value={handle || ""}
            onChange={(e) => sethandle(e.target.value.toLowerCase())}
            className="bg-white outline-none px-4 py-2 rounded-lg w-2/5 max-sm:w-3/5 h-10 text-lg font-poppins"
            placeholder="linkhive/"
          />
        </div>

        <div className="font-poppins text-xl font-medium">
          Step 2 : Enter your name
        </div>
        <div className="w-full my-5 flex gap-5 items-center">
          <input
            type="text"
            value={name || ""}
            onChange={(e) => setname(e.target.value)}
            className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-4/5 h-10 text-lg font-poppins"
            placeholder="Enter your profile name"
          />
        </div>
        <div className="font-poppins text-xl font-medium">
          Step 3 : Add Profile Photo
        </div>
        <div className="w-full my-5 flex gap-5 items-center">
          <input
            type="text"
            value={profilepic || ""}
            onChange={(e) => setprofilepic(e.target.value)}
            className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-4/5 h-10 text-lg font-poppins"
            placeholder="Enter profile photo link"
          />
        </div>
        <div className="font-poppins text-xl font-medium">
          Step 4 : Add Profile Description
        </div>
        <div className="w-full my-5 flex gap-5 items-center">
          <textarea
            value={description || ""}
            onChange={(e) => setdescription(e.target.value)}
            className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full min-h-20 text-lg font-poppins resize-y"
            placeholder="Enter profile description"
          />
        </div>
        <div className="font-poppins text-xl font-medium">
          Step 5 : Add Links
        </div>
        {links &&
          links.map((item, index) => {
            return (
              <div key={index} className="w-full my-5 flex gap-8 max-sm:gap-3 items-center">
                <input
                  type="text"
                  value={item.linktext || ""}
                  onChange={(e) =>
                    handleChange(index, item.link, e.target.value)
                  }
                  className="bg-white outline-none px-4 py-2 rounded-lg w-2/5 max-sm:w-1/2 h-10 text-lg font-poppins"
                  placeholder="Enter Link Text"
                />
                <input
                  type="text"
                  value={item.link || ""}
                  onChange={(e) =>
                    handleChange(index, e.target.value, item.linktext)
                  }
                  className="bg-white outline-none px-4 py-2 rounded-lg w-2/5 max-sm:w-1/2 h-10 text-lg font-poppins"
                  placeholder="Enter Link"
                />
              </div>
            );
          })}
        <button
          disabled={
            links.some((link) => link.link.length < 10) ||
            links.some((link) => link.linktext.length < 3)
          }
          onClick={() => addLink()}
          className="disabled:bg-neutral-700 font-poppins text-white font-bold mb-5 px-8 py-2 bg-[#316a] rounded-full cursor-pointer outline-none"
        >
          Add
        </button>
        <div className="font-poppins text-xl font-medium">
          Step 6 (Optional) : Add your social network&apos;s links
        </div>
        <div className="w-full my-5 flex flex-col gap-5">
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={social[0].yt}
              onChange={(e) =>
                setSocial([{ ...social[0], yt: e.target.value }])
              }
              className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full h-10 text-lg font-poppins"
              placeholder="YouTube link"
            />
          </div>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={social[0].insta}
              onChange={(e) =>
                setSocial([{ ...social[0], insta: e.target.value }])
              }
              className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full h-10 text-lg font-poppins"
              placeholder="Instagram link"
            />
          </div>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={social[0].github}
              onChange={(e) =>
                setSocial([{ ...social[0], github: e.target.value }])
              }
              className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full h-10 text-lg font-poppins"
              placeholder="GitHub link"
            />
          </div>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={social[0].linkedin}
              onChange={(e) =>
                setSocial([{ ...social[0], linkedin: e.target.value }])
              }
              className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full h-10 text-lg font-poppins"
              placeholder="LinkedIn link"
            />
          </div>
          <div className="flex gap-5 items-center">
            <input
              type="text"
              value={social[0].twitter}
              onChange={(e) =>
                setSocial([{ ...social[0], twitter: e.target.value }])
              }
              className="bg-white outline-none px-4 py-2 rounded-lg w-3/5 max-sm:w-full h-10 text-lg font-poppins"
              placeholder="Twitter link"
            />
          </div>
        </div>

        <button
          disabled={
            handle.length < 3 || links.length < 1 || profilepic.length < 10
          }
          onClick={() => {
            createHive();
          }}
          className="disabled:bg-neutral-700 font-poppins text-white font-bold px-7 py-3 bg-[#316a] rounded-full cursor-pointer outline-none mt-5"
        >
          Create your Hive
        </button>
      </div>
      <div className="home-video w-1/2 flex flex-col items-center mt-35 max-sm:hidden">
        <video
          src="/demo-video.webm"
          className="w-full"
          alt="sample video of linkhive"
          autoPlay
          loop
          playsInline
          muted
        />
        <img src="/sample 4.png" alt="social media slides" className="w-13/20 bg-blend-lighten h-auto"/>
      </div>
      <ToastContainer />
    </div>
  );
};



const Generate = () => {
  return (
    <Suspense fallback={<div className="bg-pink-300 w-full min-h-screen flex items-center justify-center">Loading...</div>}>
      <GenerateForm />
    </Suspense>
  );
};



export default Generate;