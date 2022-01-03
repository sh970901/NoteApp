import React, { useRef } from 'react'
import { useHistory } from 'react-router-dom'
import useFetch from "../hooks/useFetch"

const CreateWord = () => {

    const days = useFetch('http://localhost:3001/days')
    const history = useHistory(); //페이지 전환기능

    function onSubmit(e) {
        e.preventDefault(); //새로 고침되지 않음 기본기능을 막아줌

        console.log(engRef.current.value)
        console.log(korRef.current.value)
        console.log(dayRef.current.value)

        fetch(`http://localhost:3001/words`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                day: dayRef.current.value,
                eng: engRef.current.value,
                kor: korRef.current.value,
                isDone: false
            })
        }).then(res => {
            if (res.ok) {
                alert("생성이 완료되었습니다")  
                history.push(`/day/${dayRef.current.value}`)//페이지전환
            }
        })
    }  

   


    //dom에 접근할수 있게 해주는 useRef
    const engRef = useRef(null)
    const korRef = useRef(null)
    const dayRef = useRef(null)

    return (
        <form onSubmit={onSubmit}>
            <div className='input_area'>
                <label>Eng</label>
                <input type="text" placeholder='computer' ref={engRef}></input>
            </div>
            <div className='input_area'>
                <label>Kor</label>
                <input type="text" placeholder='컴퓨터' ref={korRef}></input>
            </div>
            <div className='input_area'>
                <select ref={dayRef}>
                    {days.map(day => (
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}

                </select>
            </div>
            <button>저장</button>
        </form>
    )
}

export default CreateWord
