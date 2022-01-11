//뜻을 보여주는 컴포넌트
import React from 'react'
import { useState } from 'react';

export default function Word({ word: w }) { //props로 넘어온 word는 w로 사용

    const [word, setWord] = useState(w);
    const [isShow, setIsShow]= useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    
    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone(){
        //setIsDone(!isDone);
        fetch(`http://localhost:3001/words/${word.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...word,
                isDone: !isDone
            })
        })
        .then(res=>{
            if(res.ok){
                setIsDone(!isDone);
            }
        })
    }

    function del(){
        if(window.confirm('삭제 하시겠습니까?')){
            fetch(`http://localhost:3001/words/${word.id}`, {
                method: 'DELETE'
            }).then(res=>{
                if(res.ok){
                    setWord({id: 0});
                }
            })
        }
    }

    if(word.id ===0){
        return null;
    }
    return (
            <tr className={isDone ? "off" : ''}>
                <td>
                    <input type="checkbox" checked={isDone}
                    onChange={toggleDone}></input>
                </td>
                <td>
                    {word.eng}
                </td>
                <td>
                    {isShow && word.kor} 
                </td>
                <td>
                    <button onClick={toggleShow}>뜻 {isShow ? '숨기기': '보기'}</button>
                    <button className='btn_del' onClick={del}>삭제</button>
                </td>
            </tr>
    )
}
//isShow일때만 뜻을 보여주기 위해 &&사용
//tr 클래스네임 지워서 해보면 효과를 알 수 있음 동작이안되는걸 확인가능 
