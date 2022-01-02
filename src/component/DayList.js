//Day들을 표시 추가.삭제가능

import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
//import useFetch from '../hooks/useFetch';

const DayList = () => {
    const [days, setDays] = useState([]);


   // const days = useFetch("http://localhost:3001/days");


    //useEffect는 렌더링이 끝나고 실행됨 
    useEffect(() => {
        fetch('http://localhost:3001/days') //api 비동기 통신을 위한 fetch
        .then(res=> {
            return res.json();  //res는 html이기때문에 json으로 변환해주어야함 
        })
        .then(data =>{
            setDays(data);
            console.log(data)
        })
    }, []); //빈배열이므로 한번만 실행됨 만약 카운트가 들어오면 카운트 증가할때만 실행됨 


    return (
        <>
            <ul className='list_day'>
                {days.map(day => (             //day 개수만큼 뽑아줘야하는데 반복문 대신 map을 이용, map은 배열을 받아서 또 다른 배열을 반환함 , 키는 반복되는 요소의 고유한 값을 넣어주어야함
                    <li key={day.id}>
                        <Link to={`/day/${day.day}`}>Day {day.day}</Link>
                    </li>
                ))}
            </ul>
            
        </>

    )
}

export default DayList
