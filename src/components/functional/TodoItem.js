import React from 'react';

import { Button, List } from 'semantic-ui-react';

const TodoItem = ({item, onCompleteItem, onDeleteItem}) => {
  return (
    <List.Item>
      <List.Header>
        <Button circular positive icon="check" onClick={() => onCompleteItem(item.id)} />
        <span>{!item.completed ? (item.todo) : (<strike>{item.todo}</strike>)}</span>
        <Button circular negative icon="x" onClick={() => onDeleteItem(item.id)} />
      </List.Header>
    </List.Item>
  );
};

export default TodoItem;