import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import HomePage from './containers/HomePage';

export default class App extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		open: false
    	};
  	}

  	toggleDrawerMenu = () => {
    	this.setState({
      		open: !this.state.open
    	});
  	}

  	handleClose = () => {
    	this.setState({
     		open: false
    	});
  	}

	render() {
  		return (
  			<div>
  			    <AppBar
          			className='app-bar'
          			title='TODO App'
          			onLeftIconButtonClick={this.toggleDrawerMenu}
        			zDepth={2}/>
       			<Drawer
      				docked={false}
      				width={200}
      				open={this.state.open}
              		onRequestChange={(open) => this.setState({open})}>
					<Link to={'/'} className='link'><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>							
				</Drawer>
				<Switch>
					<Route exact path='/' component={HomePage} />
				</Switch>
    		</div>
  		);
  	}
}