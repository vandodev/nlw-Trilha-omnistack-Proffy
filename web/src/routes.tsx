import React from 'react';
//yarn add react-router-dom
//yarn add @types/react-router-dom(Esqueci de colocar o -D no fi)
import {BrowserRouter, Route} from 'react-router-dom';
import Landing from './pages/landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';

function Routes(){
    return(
        <BrowserRouter>
            <Route path="/" exact component={Landing}/>
            <Route path="/study" component={TeacherList}/>
            <Route path="/give-classes" component={TeacherForm}/>
        </BrowserRouter>
    );
}

export default Routes;