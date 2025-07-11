import React, { useEffect, useState, useCallback } from "react";
import FullBorder from "./common/borders/FullBorder";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import IconButton from "./common/buttons/IconButton";
import AllDirectionsFullBorder from "./common/borders/AllDirectionsFullBorder";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  // 記事取得
  useEffect(() => {
    fetch("./zenn.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`zennの記事取得に失敗しました。status${res.status}`);
        }
        return res.json();
      })
      .then((data) => setBlogs(data.articles))
      .catch((e) => console.log(e));
  }, []);

  const formatDate = useCallback((iso) => {
    const d = new Date(iso);
    return `${d.getMonth() + 1}月 ${d.getDate() + 1}日`;
  }, []);

  return (
    <div className="w-[96%] text-white sm:grid grid-cols-3 gap-x-8 gap-y-6 sm:w-[80%] mx-auto">
      {blogs.map((blog) => (
        <div key={blog.id} className="relative p-4 my-4 sm:my-0">
          <AllDirectionsFullBorder />
          <div className="w-full flex justify-center">
            <div className="my-8 inline-block text-[80px] leading-none text-center opacity-20 ">
              <a target="_blank" href={`https://zenn.dev/${blog.path}`}>
                {blog.emoji}
              </a>
            </div>
          </div>
          <p className="h-16">
            <a target="_blank" href={`https://zenn.dev/${blog.path}`}>
              <span className="gradient-text-common-text">{blog.title}</span>
            </a>
          </p>
          <div className="flex justify-end mr-5 space-x-5">
            <IconButton
              iconName="edit"
              text={formatDate(blog.published_at)}
              disabledScale={true}
              className="gradient-text-common-text"
            />
            <IconButton
              iconName="like"
              text={blog.liked_count}
              borderColor="red"
              iconColor="rgb(238,15,18,0.8)"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
