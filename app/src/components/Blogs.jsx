import React, { useEffect, useState } from "react";

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

  return (
    <div className="text-white grid grid-cols-3 gap-4">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col justify-center items-center"
        >
          <p>icon:{blog.emoji}</p>
          <p>
            <a target="_blank" href={`https://zenn.dev/${blog.path}`}>
              <span className="text-blue-500">{blog.title}</span>
            </a>
          </p>
          <p>like:{blog.liked_count}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
