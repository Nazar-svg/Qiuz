import React, { Component } from 'react'
import Layout from './hoc/Layout/Layout'
import { Route, Switch , Redirect , withRouter} from 'react-router-dom'
import Qiuz from './containers/Quiz/Quiz'
import QiuzLIst from './containers/QiuzList/QiuzList'
import Auth from './containers/Auth/Auth'
import QiuzCreator from './containers/QiuzCreator/QiuzCreator'
import { connect } from 'react-redux'
import Logout from './components/Logout/Logout'
import {autoLogin} from './store/actions/auth'
class App extends Component {
  componentDidMount() {
    this.props.autoLogin()
  }

  render() {

    let routes = (
      <Switch>
      <Route path='/auth' component={Auth}/>
        <Route path='/quiz/:id' component={Qiuz} />
        <Route path='/' exact component={QiuzLIst} />
        <Redirect to={'/'}/>
      </Switch>
    )

    if(this.props.isAuthenticated){
      routes = (
        <Switch>
          <Route path='/quiz-creator' component={QiuzCreator} />
          <Route path='/quiz/:id' component={Qiuz} />
          <Route path='/logout' component={Logout} />
          <Route path='/' exact component={QiuzLIst} />
          <Redirect to={'/'}/>
        </Switch>
      )
    }
    return(
      <Layout>
       { routes }
    </Layout>
    )
  }
}
function mapStateToProps(state) {
  return {
  isAuthenticated: !!state.auth.token
  }
}
function mapDispatchToProps(dispatch) {
  return {
     autoLogin: () => dispatch(autoLogin())
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps) (App)) 
