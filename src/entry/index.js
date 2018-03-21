import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Loadable from 'react-loadable';

const Loading = ()=><div>loading...</div>
const Add = Loadable({
	loader: ()=>import('../screen/Add'),
	loading: Loading,
})
class Index extends Component{
	render(){
		return <h1>sdfsdf</h1>
	}
		
}
class App extends Component{
	render(){
		return <Router >
			<div>
			<Route path="/index" component={Index}/>
			<Route path="/add" component={Add}/>
			</div>
		</Router>
	}	
	 
}
ReactDOM.render(
	<App/>,
	document.getElementById('app')
)
