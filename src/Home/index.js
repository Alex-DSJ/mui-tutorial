import React, { Component } from 'react'
import { Redirect, Route, Switch, Router } from 'react-router-dom'
import TypographyPage from '../Typography'
import ButtonPage from '../Button'
import TextFieldPage from '../TextField'
import RadioPage from '../Radio'
import Sidebar from '../Sidebar'

export default class Home extends Component {
  constructor(props) {
    super(props);
    console.log('Home/props: ', this.props)

    this.state = {
      currentPath: '/'
    }
  }

  handlePathChange = (path) => this.setState({ currentPath: path })

  render() {
    console.log('Home/state: ', this.state)
    return (
      <div>
        <Sidebar handlePathChange={this.handlePathChange} />
        <Switch>
            <Route path='/typography' component={TypographyPage} />
            <Route path='/button' component={ButtonPage} />
            <Route path='/textfield' component={TextFieldPage} />
            <Route path='/radio' component={RadioPage} />
            <Redirect to='/button' />
        </Switch>
      </div>
    )
  }
}
