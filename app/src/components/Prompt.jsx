import React, { useCallback, useEffect, useState } from 'react'

const Prompt = ({tokens}) => {
  const [text,setText] = useState(0);
  const [isStop,setIsStop] = useState(true);

  // 220msごとにプロンプトを入力
  useEffect(() => {
    if (isStop) {
      const interval = setInterval(() => {
        setText(state => Math.min(state + 1 , tokens.length));
        if (text === tokens.length){
          setIsStop(false);
        }
      },220);
      return () => clearInterval(interval); 
    }
  } , [isStop,text]);


  const handleInput = useCallback(() => {
    setText(state => Math.min(state + 1 , tokens.length)); // 現在のstate値から+1する。配列の長さを超えることはない。
    setClear('');
  } , []);

  const handleClean = useCallback(() => {
    setText(0);
    setIsStop(true);
  } , []);

  return (
    <div>
      <div className='max-w-[1000px] w-[640px] border-[#f6f6f6] border-2 rounded-lg p-3 bg-black my-5'>
        <div className='flex items-center justify-between'>
            <p className='text-white'><span className='text-[#98c379]'>class</span><span className='text-red-600 px-1.5'>Takuya0202</span>{'{'}</p>
            <button className='px-2 py-0.5 rounded-sm text-white border-2 border-white' onClick={handleClean}>clear</button>
        </div>
        <div className='ml-3'>
          {tokens.slice(0, text).map((token, i) => { // 現在のインデックス番号までの配列をmapする。
            // 改行
            if (token.type === 'enter'){
              return <br key={i} />
            };
            // インデント
            if (token.type === 'space'){
              return <span key={i} className='inline-block px-4 bg-black opacity-95'/>
            };
            // url
            if (token.type === 'link') {
              return <a key={i} href={token.href} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mx-0.5">{token.text}</a>;
            }
            // その他の出力
            const colors = {
              word: '#98c379',       
              variable: '#e06c75',   
              property: '#e5c07b',   
              string: '#c678dd', 
              symbol: '#abb2bf',   
              func: '#61afef',  
            };
            return <span key={i} className="text-white" 
              style={{color : colors[token.type] , padding: token.pd && '0 6px 0 0' }}
              >{token.text}</span>;
            })}
          </div>

/

        </div>
    </div>
  )
}

export default Prompt
