import React from 'react';
import { List } from 'semantic-ui-react';

import TodoItem from './TodoItem';

const TodoList = ({items, onCompleteItem, onDeleteItem}) => {
  console.log(items);
  return (
    <List selection verticalAlign="middle">
      {items.map(item => <TodoItem item={item} onCompleteItem={onCompleteItem} onDeleteItem={onDeleteItem} key={item.id} />)}
    </List>
  );
};

export default TodoList;