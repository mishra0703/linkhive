import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  TwitterIcon,
  InstagramIcon,
  Linkedin01Icon,
  GithubIcon,
  YoutubeIcon,
} from "@hugeicons/core-free-icons";

export default async function Page({ params }) {
  const handle = (await params).handle;
  const client = await clientPromise;
  const db = client.db("LinkHive");

  const collection = db.collection("links");

  const item = await collection.findOne({ handle: handle });

  if (!item) {
    return notFound();
  }

  return (
    <div className="bg-gradient-to-br from-[#bf6aff] via-[#7d4dff] to-[#3f1dff] w-full flex flex-col justify-start items-center py-10 scrollbar-three h-screen overflow-y-scroll">
      {item && (
        <>
          <div className="w-3/4 max-sm:w-full Profile-section flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-3 border-white overflow-hidden">
              <img
                src={item.profilepic}
                alt="Profile Photo"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-3xl font-zain font-black mt-5 tracking-wide">
              {item.name}
            </h1>
            <h1 className="text-lg font-poppins font-medium">@{item.handle}</h1>
            <span className="w-3/4 max-sm:w-4/5 mt-3 text-center text-sm font-poppins font-light">
              {item.desc}
            </span>
            <div className="links flex flex-col gap-5 mt-10 w-full items-center">
              {item.links.map((item, index) => {
                return (
                  <Link
                    key={index}
                    href={item.link}
                    target="_blank"
                    className="w-1/2 max-sm:w-9/10 rounded-2xl py-3 text-black text-center font-poppins font-medium 
              bg-white/10 backdrop-blur-xl border border-white/30 shadow-lg 
                hover:scale-102 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)]
                transition-all duration-400 ease-in-out"
                  >
                    {item.linktext}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="social mt-10 flex gap-3">
            {item.social.yt && (
              <Link
                href={item.social.yt}
                target="_blank"
                className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-2 rounded-full hover:scale-115 transition-all ease-in-out duration-300"
              >
                <HugeiconsIcon icon={YoutubeIcon} size={30} />
              </Link>
            )}

            {item.social.insta && (
              <Link
                href={item.social.insta}
                target="_blank"
                className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-2 rounded-full hover:scale-115 transition-all ease-in-out duration-300"
              >
                <HugeiconsIcon icon={InstagramIcon} size={30} />
              </Link>
            )}
            {item.social.linkedin && (
              <Link
                href={item.social.linkedin}
                target="_blank"
                className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-2 rounded-full hover:scale-115 transition-all ease-in-out duration-300"
              >
                <HugeiconsIcon icon={Linkedin01Icon} size={30} />
              </Link>
            )}

            {item.social.github && (
              <Link
                href={item.social.github}
                target="_blank"
                className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-2 rounded-full hover:scale-115 transition-all ease-in-out duration-300"
              >
                <HugeiconsIcon icon={GithubIcon} size={30} />
              </Link>
            )}
            {item.social.twitter && (
              <Link
                href={item.social.twitter}
                target="_blank"
                className="bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-2 rounded-full hover:scale-115 transition-all ease-in-out duration-300"
              >
                <HugeiconsIcon icon={TwitterIcon} size={30} />
              </Link>
            )}
          </div>
        </>
      )}
    </div>
  );
}
