import React from 'react';
import DayList from './component/DayList';
import Headers from './component/Header';
import Day from './component/Day';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EmptyPage } from './component/EmptyPage';


const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Headers></Headers>
        <Switch>
          <Route exact path="/">
            <DayList></DayList>
          </Route>
          <Route path="/day/:day">
            <Day></Day>
          </Route>
          <Route>
            <EmptyPage></EmptyPage>
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
//리액트 돔에서 다이나믹한 url 처리를 /: 이렇게 처리하면됨
//json-server --watch ./src/db/data.json --port 3001  제이슨서버로 빠르고 쉽게 restAPI구축가능 

