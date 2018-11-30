import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconBtton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';


export default class Header extends Component {

  state = {
    drawerOpen: false,
    headerShow: false
  };

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandler)
  }

  // always remove the listener if the compoenent is unmounted
  componentWillUnmount() {
    window.removeEventListener('scroll');
  }
  


  scrollHandler = () => {
    // if the scroll position is greater than 0, show header
    if (window.scrollY > 0) {
      this.setState({
        headerShow: true
      });
    } else {
      this.setState({headerShow: false});
    }
    
  }

  toggleDrawer = value => {
    this.setState({
      drawerOpen: value
    });
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style={{
          backgroundColor: this.state.headerShow? '#2f2f2f': 'transparent',
          boxShadow: 'none',
          padding: '10px 0'
        }}
      >
        <ToolBar>
          <div className="header_logo">
            <div className="font_righteous header_logo_venue">The Venue</div>
            <div className="header_logo_title">Musical Events</div>
          </div>
          <IconBtton
            aria-label="Menu"
            color="inherit"
            onClick={() => this.toggleDrawer(true)}
          >  
            <MenuIcon></MenuIcon>
          </IconBtton>
          <SideDrawer
            open={this.state.drawerOpen}
            onClose={(value) => this.toggleDrawer(value)}
            />
        </ToolBar>
      </AppBar> 
    )
  }
}
