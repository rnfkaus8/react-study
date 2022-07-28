import "./app.css";
import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    habits[idx].count++;
    this.setState({ habits });
  };

  handleDecreament = (habit) => {
    const habits = [...this.state.habits];
    const idx = habits.indexOf(habit);
    const count = habits[idx].count - 1;
    habits[idx].count = count < 0 ? 0 : count;
    this.setState({ habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleAdd = (name) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), name: name, count: 0 },
    ];
    this.setState({ habits });
  };
  render() {
    return (
      <>
        <Navbar
          totalCount={
            this.state.habits.filter((item) => {
              return item.count > 0;
            }).length
          }
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecreament={this.handleDecreament}
          onDelete={this.handleDelete}
          onAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default App;
