import React, { useState, useEffect , Component} from 'react';
import { render } from 'react-dom';
import './ClassDropDown.css';
import {MultiSelect} from "react-multi-select-component";

// function ClassDropdown(){
// 	const [displayDropdown, setDisplayDropdown] = useState("none");
// 	var checkShow = false;
// 	const selectClass = () => {
// 		if (displayDropdown==="block"){
// 			setDisplayDropdown("none")
// 		}
// 		else{
// 			setDisplayDropdown("block")
// 		}
// 	};
// 	// state = {
// 	// 	style:{
// 	// 	display: "none",
// 	// 	border: "1px #8DF5E4 solid"
// 	// 	},
// 	// 	temp: [{

// 	// 	}]
// 	// }

// 	// handleShow = () =>{
// 	// 	var style = { ...this.state.style }
// 	// 	if (style.display==="none"){
// 	// 		style.display = "block";
// 	// 	}
// 	// 	else{
// 	// 		style.display = "none";
// 	// 	}
// 	// 	this.setState({style})
// 	// }
//    return(
//       <>
// 		<div class="multipleSelection">
// 			<div class="selectBox"
// 				onclick={selectClass}>
// 				<select>
// 					<option>Select options</option>
// 				</select>
// 				<div class="overSelect"></div>
// 			</div>
// 			<div style={{display: displayDropdown}}> 
// 				<label for="first">
// 					<input type="checkbox" id="first" />
// 					lớp 1
// 				</label>
// 				<label for="second">
// 					<input type="checkbox" id="second" />
// 					lớp 2
// 				</label>
// 				<label for="third">
// 					<input type="checkbox" id="third" />
// 					lớp 3
// 				</label>
// 				<label for="fourth">
// 					<input type="checkbox" id="fourth" />
// 					lớp 4
// 				</label>
// 			</div>
// 		</div>
// 	</>
//    )
// }

// class InputCheckboxAll extends Component{
// 	handleChange = (event) => {
// 	  this.props.handleChange(event)
// 	}
// 	render() {
// 	  return (
// 	  <input
// 				type='checkbox'
// 				{...this.props}
// 				onChange={this.handleChange} />
// 	  );
// 	}
// }
 
// class InputCheckbox extends Component{
// 	getInitialState = () => {
// 	  return {
// 		 checked: this.props.checked
// 	  }
// 	}
// 	render() {
// 	  var checkedValue = this.props.allChecked ? true : this.state.checked
// 	  return (
// 	  <input
// 				checked={checkedValue}
// 				type='checkbox'
// 				{...this.props}/>
// 	  )
// 	}
// }
 
// class ClassDropdown extends Component{
// 	getInitialState = () =>{ return {allChecked: false}; }
// 	handleChange  = (event) => {
// 	  var $elm = $(event.target)
// 	  var checked = $elm.prop('checked')
// 	  this.setState({
// 		 allChecked: checked
// 	  })
// 	}
// 	render() {
// 	  return (
// 	  <div>
// 		 Select All: <InputCheckboxAll handleChange={this.handleChange}/><br/>
// 		 <InputCheckbox allChecked={this.state.allChecked}/><br/>
// 		 <InputCheckbox allChecked={this.state.allChecked}/><br/>
// 		 <InputCheckbox allChecked={this.state.allChecked}/><br/>
// 	  </div>
// 	  )
// 	}
// }

const ClassDropdown = () => {
	const options = [
	  { label: "1", value: "1" },
	  { label: "2", value: "2" },
	  { label: "3", value: "3" },
	  { label: "4", value: "4" },
	  { label: "5", value: "5" },
	  { label: "6", value: "6" },
	  { label: "7", value: "7" },
	  { label: "8", value: "8" },
	  { label: "9", value: "9" },
	  { label: "10", value: "10" },
	  { label: "11", value: "11" },
	  { label: "12", value: "12" },
	];
 
	const [selected, setSelected] = useState([]);
 
	return (
	  <div>
		 <MultiSelect
			options={options}
			value={selected}
			onChange={setSelected}
			labelledBy="Lớp"
			style={{overflow: "hidden"}}
		 />
	  </div>
	);
 };
 

export default ClassDropdown;

