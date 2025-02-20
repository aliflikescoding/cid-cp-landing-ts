import React from "react";
import CustomContainer from "../custom/CustomContainer";
import BlogCard from "../ui/BlogCard";
import ArrowLink from "../ui/ArrowLink";

interface BlogProp {
  expanded: boolean;
}

interface ClusterItem {
  id: number;
  title: string;
  summary: string;
  imageFile: string;
}

const Blog: React.FC<BlogProp> = async ({ expanded }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/article-preview`,
    {
      cache: "force-cache",
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  const articles: ClusterItem[] = data.articlePreview;
  const displayArticles = expanded ? articles : articles.slice(0, 3);

  return (
    <div
      className={`${
        expanded ? "bg-background text-text" : "bg-secondary text-background"
      } py-20 rounded-2xl`}
    >
      <CustomContainer>
        <div className="mb-10">
          <h1
            className={`capitalize font-bold ${
              expanded ? "text-4xl" : "text-5xl"
            }`}
          >
            {expanded ? "Our promos and news" : "Our Latest Promos and News"}
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
          {displayArticles.map((cluster) => (
            <BlogCard
              key={cluster?.id}
              title={cluster?.title}
              desc={cluster?.summary}
              imageLink={cluster.imageFile}
              link={`/blog/${cluster?.id}`}
            />
          ))}
        </div>
        {!expanded && (
          <ArrowLink
            className="text-xl mt-10"
            link="/blog"
            title="see all articles"
            color="background"
            bg="background"
          />
        )}
      </CustomContainer>
    </div>
  );
};

export default Blog;
