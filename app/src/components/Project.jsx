import React, { useCallback, useEffect, useState } from "react";
import AllDirectionsBorder from "./common/borders/AllDirectionsBorder";
import Border from "./common/borders/Border";
import FullBorder from "./common/borders/FullBorder";
import IconButton from "./common/buttons/IconButton";
import Button from "./common/buttons/Button";

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

  const formatDate = useCallback((iso) => {
    const d = new Date(iso);
    return `last-commit  ${d.getMonth() + 1}月 ${d.getDate() + 1}日`;
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
    <div className="w-[96%] sm:grid grid-cols-3 gap-x-4 gap-y-8 sm:w-[80%] mx-auto">
      {pinnedRepos &&
        pinnedRepos.map((rp) => (
          <div
            className="text-white p-4 rounded-md relative my-4 sm:my-0"
            key={rp.id}
          >
            <AllDirectionsBorder />
            <div className="relative">
              <a
                href={`https://github.com/Takuya0202/${rp.name}`}
                target="_blank"
              >
                <img
                  src={`https://socialify.git.ci/Takuya0202/${rp.name}/image?description=1&font=Source%20Code%20Pro&name=1&pattern=Solid&theme=Dark`}
                  alt="リポジトリ画像"
                  className="relative pb-2"
                />
              </a>
              <FullBorder direction="bottom" className="mb-2" />
            </div>
            <p>
              <a
                href={`https://github.com/Takuya0202/${rp.name}`}
                target="_blank"
                className="text-[#f2f2f2]  "
              >
                {rp.name}
              </a>
            </p>
            <p className="h-16">{rp.description}</p>
            <div className="flex justify-end mr-3 items-center space-x-5">
              <Button className="hover:scale-100">
                {formatDate(rp.updated_at)}
              </Button>
              <IconButton
                iconName="star"
                text={rp.stargazers_count}
                borderColor="yellow"
                iconColor="yellow"
              />
            </div>
          </div>
        ))}
    </div>
  );
};

export default Project;
