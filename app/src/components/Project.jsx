import React, { useEffect, useState } from "react";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import Border from "./common/borders/Border";
import FullBorder from "./common/borders/FullBorder";
import IconButton from "./common/buttons/IconButton";

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
    <div className="grid grid-cols-3 gap-x-4 gap-y-8 w-[80%] mx-auto">
      {pinnedRepos &&
        pinnedRepos.map((rp) => (
          <div className="text-white p-4 rounded-md relative" key={rp.id}>
            <AllDirectionsBorder />
            <div className="relative">
              <img
                src={`https://socialify.git.ci/Takuya0202/${rp.name}/image?description=1&font=Source%20Code%20Pro&name=1&pattern=Solid&theme=Dark`}
                alt="リポジトリ画像"
                className="relative pb-2"
              />
              <FullBorder direction="bottom" className="mb-2" />
            </div>
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
            <div className="flex justify-end mr-3">
              <IconButton iconName="star" text={rp.stargazers_count} borderColor="yellow"/>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
