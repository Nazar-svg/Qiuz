import React from 'react';
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom';
import Qiuz from './containers/Qiuz/Qiuz'
import QiuzLIst from './containers/QiuzList/QiuzList'
import Auth from './containers/Auth/Auth'
import QiuzCreator from './containers/QiuzCreator/QiuzCreator'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/auth" component={Auth}/>
        <Route path="/qiuz-creator" component={QiuzCreator}/>
        <Route path="/qiuz/:id" component={Qiuz}/>
        <Route path="/" component={QiuzLIst}/>
      </Switch>
    </Layout>
  );
}

export default App;
