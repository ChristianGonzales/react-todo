import React from 'react';
import { Form, Header, Icon, Input } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';

import TodoList from './TodoList';

const FnTodo = () => {
  const [editingItem, setEditingItem] = React.useState("");
  const [items, setItems] = React.useState([]);

  const onItemChanged = (e) => {
    setEditingItem(e.target.value);
  };

  const onAddItem = () => {
    const newItem = {
      id: uuid(),
      todo: editingItem,
      completed: false
    };

    setItems(cur => [...cur, newItem]);
    setEditingItem("");
  };

  const onCompleteItem = React.useCallback((id) => {
    const localCopy = [...items];

    const itemIndex = items.findIndex(i => i.id === id);

    const item = items.find(i => i.id === id);
    item.completed = !item.completed;

    localCopy[itemIndex] = item;

    setItems(localCopy);
  }, [items]);
  
  const onDeleteItem = React.useCallback((id) => {
    const filtered = items.filter(i => i.id !== id);

    setItems(filtered);
  }, [items]);

  return (
    <React.Fragment>
      <div>
        <Header as="h2" icon>
          <Icon name="sticky note outline" />
          TODO
          <Header.Subheader>
            What needs to be done?
          </Header.Subheader>
        </Header>
      </div>
      <div>
        <Form onSubmit={e => e.preventDefault()}>
          <Input
            action={{color: 'green', icon: 'plus', onClick: () => onAddItem()}}
            actionPosition='right'
            icon='pencil alternate'
            iconPosition='left'
            onChange={onItemChanged}
            value={editingItem}
          />
        </Form>
      </div>
      <div>
        <TodoList items={items} onCompleteItem={onCompleteItem} onDeleteItem={onDeleteItem}/>
      </div>
    </React.Fragment>
  );
};

export default FnTodo;