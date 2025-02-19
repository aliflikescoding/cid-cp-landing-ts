import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  desc: string;
  imageLink: string;
  link: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, desc, imageLink, link }) => {
  return (
    <Link href={`${link}`} className="bg-background text-text rounded-2xl shadow">
      <Image
        src={`${imageLink}`}
        alt="blog image"
        height={0}
        width={0}
        sizes="100vw"
        className="h-[260px] w-full rounded-t-2xl"
      />
      <div className="py-6 px-4">
        <div className="flex flex-wrap mb-2">
          <div className="text-xs rounded-full p-1 bg-accent">category</div>
        </div>
        <h2 className="text-2xl font-semibold ">{title}</h2>
        <p className="text-base font-normal">{desc}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
