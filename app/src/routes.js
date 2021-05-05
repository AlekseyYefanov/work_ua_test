import React from 'react';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history'

import CreateVacancy from './components/vacancies/vacanciesForm/CreateVacancy';
import EditVacancy from './components/vacancies/vacanciesForm/EditVacancy';
import Vacancies from './components/vacancies/Vacancies';

const Routes = () => {
    return (
        <Router history={createBrowserHistory()} >
            <Switch>
                <Route exact path='/' component={Vacancies} />
                <Route path='/create-vecancy' component={CreateVacancy} />
                <Route path='/update-vecancy/:id' component={EditVacancy} />
            </Switch>
        </Router>
    )
}

export default Routes;
