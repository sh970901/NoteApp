//뜻을 보여주는 컴포넌트
import React from 'react'
import { useState } from 'react';

export default function Word({ word }) {
    const [isShow, setIsShow]= useState(false);
    const [isDone, setIsDone] = useState(word.isDone);
    function toggleShow(){
        setIsShow(!isShow);
    }
    function toggleDone(){
        setIsDone(!isDone);
    }

    return (
            <tr className={isDone ? 'off' : ''}>
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
                    <button className='btn_del'>삭제</button>
                </td>
            </tr>
    )
}
//isShow일때만 뜻을 보여주기 위해 &&사용
//tr 클래스네임 지워서 해보면 효과를 알 수 있음 동작이안되는걸 확인가능 
