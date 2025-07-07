import React, { useEffect, useState } from 'react'

const Project = () => {
 // リポジトリ情報をフェッチ
  const [repo,setRepo] = useState([]);
  useEffect(() => {
    const url = 'https://api.github.com/users/Takuya0202/repos';
    fetch(url)
      .then((res) =>{
        if (!res.ok) {
          throw new Error(`リポジトリの取得に失敗しました。status:${res.status}`);
        }
        return res.json();
      })
      .then((data) => setRepo(data))
      .catch((e) => console.log(e));
  },[]);

  return (
    <div className='grid grid-cols-2 gap-4'>
      {repo && repo.map((rp) => (
        <div className='text-white' key={rp.id}>
          <p>url:{rp.owner.url}</p>
          <p>タイトル：{rp.name}</p>
          <p>説明：{rp.description}</p>
           <p>星の数：{rp.stargazers_count}</p>
        </div>
      ))}
    </div>
  )
}

export default Project
