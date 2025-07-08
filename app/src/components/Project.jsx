import React, { useEffect, useState } from "react";

const Project = () => {
  // リポジトリ情報をフェッチ
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    const url = "https://api.github.com/users/Takuya0202/repos";
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `リポジトリの取得に失敗しました。status:${res.status}`,
          );
        }
        return res.json();
      })
      .then((data) => setRepos(data))
      .catch((e) => console.log(e));
  }, []);

  // pinされているリポジトリを絞り込む
  const pinned = [
    "fastapi_task",
    "make_pc",
    "tintiro_rpg",
    "react-forum-app",
    "zubora-cook",
  ];
  const pinnedRepos = repos.filter((repo) => pinned.includes(repo.name));

  return (
    // gridで3つずつ表示
    <div className="grid grid-cols-2 gap-4 max-w-[900px] min-w-[600px] mx-auto">
      {pinnedRepos &&
        pinnedRepos.map((rp) => (
          <div
            className="text-white w-[400px] p-4 border-2 border-[#f4f4f4] rounded-md"
            key={rp.id}
          >
            <img
              src={`https://socialify.git.ci/Takuya0202/${rp.name}/image?description=1&font=Source%20Code%20Pro&name=1&pattern=Solid&theme=Dark`}
              alt="リポジトリ画像"
              className="border-b-2 border[#f4f4f4]"
            />
            <p>
              <a
                href={`https://github.com/Takuya0202/${rp.name}`}
                target="_blank"
                className="text-[#f2f2f2] text-xl px-2 py-4"
              >
                {rp.name}
              </a>
            </p>
            <p>説明：{rp.description}</p>
            <p>星の数：{rp.stargazers_count}</p>
          </div>
        ))}
    </div>
  );
};

export default Project;
