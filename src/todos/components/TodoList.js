import React from "react";
import TodoItem from "./TodoItem";
import {connect} from 'react-redux';

const TodoList = ({ todos }) => (
  <div>
    {todos.map(t => <TodoItem key={t.id}  todo={t}/>)}
  </div>
);

const mapStateToTodoListProps = state => {
    return {
      todos: state.todos,
    };
  };
  
  const mapDispatchToTodoListProps = dispatch => {
    return {};
  };

export default connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
  )(TodoList);
