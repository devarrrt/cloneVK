import React from 'react'
import { Route, Switch } from 'react-router-dom';
import { Login } from './pages/LoginPage/Login'
import { Home } from './pages/HomePage/Home'
import { Layout } from './components/Layout'
import { Messages } from './pages/MessagesPage/Messages'
import { Users } from './pages/UsersPage/Users'
import { UserPage } from './pages/UsersPage/UserPage'



interface Props {}


const App = (props: Props) => {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={ Login } />
				<Layout>
				<Route path="/home" component={ Home } />
				<Route path="/messages" component={ Messages } />
				<Route path="/users" component={ Users }  />
				<Route path="/user/:id" component={ UserPage } exact />
				</Layout>
			</Switch>
		</div>
	)
}

export default App
