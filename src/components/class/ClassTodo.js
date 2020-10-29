import React from 'react';
import { Form, Header, Icon, Input } from 'semantic-ui-react';
import {v4 as uuid} from 'uuid';

import TodoList from '../functional/TodoList';

class ClassTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editingItem: "",
      items: []
    };
  }

  onItemChanged = (e) => {
    this.setState({editingItem: e.target.value});
  };

  onAddItem = () => {
    const newItem = {
      id: uuid(),
      todo: this.state.editingItem,
      completed: false
    };

    this.setState(state => {
      console.log("state", state);
      const items = [...state.items, newItem];

      return {
        items: items,
        editingItem: ""
      };
    });
  };

  onCompleteItem = (id) => {
    const localCopy = [...this.state.items];

    const itemIndex = this.state.items.findIndex(i => i.id === id);

    const item = this.state.items.find(i => i.id === id);
    item.completed = !item.completed;

    localCopy[itemIndex] = item;

    this.setState({
      items: localCopy
    });
  };
  
  onDeleteItem = (id) => {
    this.setState(state => {
      const filtered = state.items.filter(i => i.id !== id);
       
      return {
        items: filtered
      }
    });
  };
  
  render(){
    return(
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
              action={{color: 'green', icon: 'plus', onClick: () => this.onAddItem()}}
              actionPosition='right'
              icon='pencil alternate'
              iconPosition='left'
              onChange={this.onItemChanged}
              value={this.state.editingItem}
            />
          </Form>
        </div>
        <div>
          <TodoList items={this.state.items} onCompleteItem={this.onCompleteItem} onDeleteItem={this.onDeleteItem}/>
        </div>
      </React.Fragment>
    );
  }
}

export default ClassTodo;