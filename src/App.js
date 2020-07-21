import React from 'react';
import Layout from './hoc/Layout/Layout'
import { Route, Switch } from 'react-router-dom';
import Qiuz from './containers/Quiz/Quiz'
import QiuzLIst from './containers/QiuzList/QiuzList'
import Auth from './containers/Auth/Auth'
import QiuzCreator from './containers/QiuzCreator/QiuzCreator'

function App() {
  return (
    <Layout>
      <Switch>
      <Route path='/auth' component={Auth}/>
        <Route path='/quiz-creator' component={QiuzCreator} />
        <Route path='/quiz/:id' component={Qiuz} />
        <Route path='/' exact component={QiuzLIst} />
      </Switch>
    </Layout>
  );
}

export default App;
