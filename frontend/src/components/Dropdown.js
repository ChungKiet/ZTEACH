import React from 'react';
import { useState } from 'react';
class Dropdown extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <select className={this.props.className} name={this.props.name} onChange={(e) => this.props.onChange(e)} >
            {this.props.values.map(item => (
            <option value={item}>
                {item}
            </option>
            ))}
            </select>
        );
    }
}

export default Dropdown;
