import React, { Component } from 'react';
import Menu from '../views/Menu/index';
import { removePropertiesDeep } from '@babel/types';

class MenuContainer extends Component{
    constructor (props) {
        super(props);
    
        this.state = {
          value: '',
        };
      }
    
      handleChange = (event, value) => {
        this.setState({ value });
      }
    
      componentWillReceiveProps({location: { pathname }}) {
        if(pathname !==  this.state.value) {
          this.setState({ value: pathname });
        }
      }

    render(){
        console.log('render - MenuContainer');
        const props = {
            handleChange: this.handleChange,
            value: this.state.value,
          };

        return (
            <Menu {...props}/>
        )
    }
}

export default MenuContainer;