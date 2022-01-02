//데이에 맞는 word들을 보여줌


import React from 'react'
import dummy from "../db/data.json"
import { useParams } from 'react-router-dom'
import Word from './Word'

const Day = () => {
    const a=  useParams();
    // console.log(a)
    const day = a.day;
    const wordList = dummy.words.filter(word =>(
        word.day === Number(day)
        //숫자로 맞춰줘야함 
    ))
 
    
//useParams 값은 App.js에 /:id라고하면 id값으로 받아오고 /:day라 하면 day값을 받아옴 console.log로 확인  
    return (
        <div>
            <h2>Day{day}</h2>
            <table>
                <tbody>
                    {wordList.map(word =>(                      
                    <Word word= {word} key = {word.id}></Word>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Day
