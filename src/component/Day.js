//데이에 맞는 word들을 보여줌
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Word from './Word'
import { useEffect} from 'react'
 
const Day = () => {
    const a=  useParams();
    // console.log(a)
    const day = a.day;
    
    const [words, setWords] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3001/words?day=${day}`) //api 비동기 통신을 위한 fetch
        .then(res=> {
            return res.json();  //res는 html이기때문에 json으로 변환해주어야함 
        })
        .then(data =>{
            setWords(data);
            console.log(data)
        })
    }, [day]); //특정값 ${day}을 사용하였기 때문에 의존성문제때문에 
                 //day를 넣어줘야 ${day}이 값이 최신값임을 알게됨
 
    
//useParams 값은 App.js에 /:id라고하면 id값으로 받아오고 
///:day라 하면 day값을 받아옴 console.log로 확인  
    return (
        <div>
            <h2>Day{day}</h2>
            <table>
                <tbody>
                    {words.map(word =>(                      
                    <Word word= {word} key = {word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
