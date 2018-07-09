import React, { Component } from 'react';
import './App.css';
import Squeare from './Squeare.js';

const arr = ["#FF0000","#FF0000","#FF8C00","#FF8C00",
             "#FFFF00","#FFFF00","#7CFC00","#7CFC00",
             "#40E0D0","#40E0D0","#0000FF","#0000FF",
             "#FF00FF","#FF00FF","#FFC0CB","#FFC0CB"]; 

const div = document.getElementById('root');
const elems = div.getElementsByTagName('button');

function colorRandom(a, b) {
  return Math.round(Math.random() * arr.length) - 1
}

class Board extends Component {
  constructor() {
    super()
    this.handleTileClick = this.handleTileClick.bind(this)
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      arr1: arr.sort(colorRandom),
      disabledSquearesId: [],
      status: "Choose first tile",
      round: 1,
      btn1: null,
      btn2: null,
      value2: null,
      value1: null
    }
  }

  disableActiveSqueares () {
    for(let i=0; i<elems.length; i++) {
      if (this.state.disabledSquearesId.includes(elems[i].id) || elems[i].value !== "CheckBtn") {
        elems[i].disabled=true
      } 
    }
  }

  enableActiveSqueares () {
    for(let i=0; i<elems.length; i++){ 
      if (this.state.disabledSquearesId.includes(elems[i].id)) {
        elems[i].disabled=true
      }
      else {
        elems[i].disabled=false
      }
    }
  }

  handleTileClick (e) { 
    e.target.style.backgroundColor = e.target.value 
    if (this.state.value1 === null) {
      this.setState({
        value1: e.target.value, 
        btn1: e.target.id,
        status: "Chose second tile"
      })
      e.target.disabled=true
    }
    else {
      this.setState({
        value2: e.target.value, 
        btn2: e.target.id
      })
      if (this.state.value1 === e.target.value) {      
        this.setState({ 
          status: "SAME COLOR!",
          disabledSquearesId: [...this.state.disabledSquearesId , this.state.btn1 , e.target.id]
        })
        e.target.disabled=true
        this.disableActiveSqueares ()
      }
      else {    
        this.setState({status: "DIFFERENT COLOR!"})
        e.target.disabled=true
        this.disableActiveSqueares ()
      }
    }
  }

  handleCheck (){ 
    if (this.state.disabledSquearesId.length === 16) {
      alert ("YOU WIN in round " + this.state.round)
      window.location.reload()
    }
    else{
      if (this.state.value1 === this.state.value2) {      
        for(let i=0; i<elems.length; i++) 
        if (elems[i].id === this.state.btn1 || elems[i].id === this.state.btn2 ) { 
          elems[i].style.backgroundColor = '#FFFFFF' 
        }
        this.setState({
          value1: null, value2: null, btn1: null, btn2: null,
          status: "Choose first tile", round: this.state.round + 1
        })
        this.enableActiveSqueares ()
      }
      else {    
        for(let i=0; i<elems.length; i++) 
        if (elems[i].id === this.state.btn1 || elems[i].id === this.state.btn2 ) { 
          elems[i].style.backgroundColor = '#000000' 
        }
        this.setState({
          value1: null, value2: null, btn1: null, btn2: null, 
          status: "Choose first tile", round: this.state.round + 1 
        })
        this.enableActiveSqueares ()
      }
    }
  }
  
  render() {
    return (
      <div>
        <button 
        value="CheckBtn" 
        onClick={this.handleCheck} 
        disabled = {this.state.btn1 !== null  && this.state.btn2 !== null ? false : true}> 
        Next round
        </button>

        <div className="message"> {this.state.status} </div>
        <div className="status">Round {this.state.round} </div>
        <div className="board-row">
          <Squeare id={0} color={this.state.arr1[0]} click={this.handleTileClick} />
          <Squeare id={1} color={this.state.arr1[1]} click={this.handleTileClick} />
          <Squeare id={2} color={this.state.arr1[2]} click={this.handleTileClick} />
          <Squeare id={3} color={this.state.arr1[3]} click={this.handleTileClick} />
        </div>
        <div className="board-row">
          <Squeare id={4} color={this.state.arr1[4]} click={this.handleTileClick} />
          <Squeare id={5} color={this.state.arr1[5]} click={this.handleTileClick} />
          <Squeare id={6} color={this.state.arr1[6]} click={this.handleTileClick} />
          <Squeare id={7} color={this.state.arr1[7]} click={this.handleTileClick} />
        </div>
        <div className="board-row">
          <Squeare id={8} color={this.state.arr1[8]} click={this.handleTileClick} />
          <Squeare id={9} color={this.state.arr1[9]} click={this.handleTileClick} />
          <Squeare id={10} color={this.state.arr1[10]} click={this.handleTileClick} />
          <Squeare id={11} color={this.state.arr1[11]} click={this.handleTileClick} />
        </div>
        <div className="board-row">
          <Squeare id={12} color={this.state.arr1[12]} click={this.handleTileClick} />
          <Squeare id={13} color={this.state.arr1[13]} click={this.handleTileClick} />
          <Squeare id={14} color={this.state.arr1[14]} click={this.handleTileClick} />
          <Squeare id={15} color={this.state.arr1[15]} click={this.handleTileClick} />
        </div>
      </div>
    );
  }
}
  
export default Board;
