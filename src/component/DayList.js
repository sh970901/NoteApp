//Day들을 표시 추가.삭제가능

import React from 'react'
import dummy from "../db/data.json"
import { Link } from 'react-router-dom';

const DayList = () => {
    console.log(dummy);
    return (
        <ul className='list_day'>
            {dummy.days.map(day => (             //day 개수만큼 뽑아줘야하는데 반복문 대신 map을 이용, map은 배열을 받아서 또 다른 배열을 반환함 , 키는 반복되는 요소의 고유한 값을 넣어주어야함
                <li key={day.id}>
                    <Link to= {`/day/${day.day}`}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    )
}

export default DayList
