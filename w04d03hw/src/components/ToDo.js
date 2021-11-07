import React from 'react';
import Counter from './Counter';


class ToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.remove = this.remove.bind(this);
  }
  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text.length === 0) {
      return;
    }
    const newItem = {text: this.state.text};
    this.setState(state => ({
      items: state.items.concat(newItem),
      text: '',
    }));
  }
  remove(num) {
    const newList = [...this.state.items];
    newList.splice(num, 1);
    this.setState((state) => ({items: newList, text: "",}));
  }
  render() {
    return (
      <div>
        <h1>ToDo</h1>
        <ul>
          {this.state.items.map((item, i) => (
            <li key={i}>
              {item.text}
              <button onClick={()=>this.remove(i)}>Delete</button>
              <Counter></Counter>
            </li>
          ))}
        </ul>
        <h2>What needs to be done</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="new-todo"
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>Add #{this.state.items.length + 1}</button>
        </form>
      </div>
    );
  }
}

export default ToDo;

/* 
Equivelent ToDo but using function instead of class:

import { useState } from "react";
import React from "react";
import Counter from "./Counter";

const ToDo = (props) => {
  const [myList, setList] = useState([]);
  const [itemValue, setAddItemValue] = useState("");

  function add() {
    let myListClone = [...myList];
    myListClone.push(itemValue);
    setList(myListClone);
  }

  function remove(num) {
    const newList = [...myList];
    newList.splice(num, 1);
    setList(newList);
  }
  return (
    <div>
      <h1>TO DO</h1>
      <ul>
        {myList.map((curr, i) => (
          <li key={i}>
            {curr}
            <button onClick={() => remove(i)}>Delete</button>
            <Counter></Counter>
          </li>
        ))}
      </ul>
      <ul>
        <h4>What needs to be done</h4>
        <input
          type="text"
          onChange={(e) => setAddItemValue(e.target.value)}
        />
        <button onClick={add}>Add</button>
      </ul>
    </div>
  );
};

export default ToDo;

*/