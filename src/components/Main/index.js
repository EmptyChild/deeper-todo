import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import TodoItemsList from '../TodoItemsList';
import TodoItemEditForm from '../TodoItemEditForm';
import uid from 'uid';
import './index.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addItemValue: ''
    };
  }

  handleAddItemInputChange = (evt) => {
    this.setState({
      addItemValue: evt.target.value
    })
  }

  handleSubmitAddItem = () => {
    if (this.state.addItemValue) {
      this.props.actions.AddTodoItem(uid(), this.state.addItemValue, this.props.chosenCategoryId);
    this.setState({
      addItemValue: ''
    });
    }    
  }

  render() {
    const { chosenCategory, chosenItemToEditId, itemsStorage, actions, filter, showCompleted, rootLinkpath } = this.props;
    const linkPath = chosenCategory ? chosenCategory.linkPath : '/';
    return (
      <main className='b-main'>
        <Paper zDepth={1} style ={{
          width: '100%',
          height: '100%',
        }}>
          <Switch>
            <Route exact path={linkPath + (filter ? `&filter=${filter}` : '')} render={() => {
              return chosenCategory ?
                (<div>
                  <div className='b-main__add-task-form'>
                    <TextField
                      onChange={this.handleAddItemInputChange}
                      value={this.state.addItemValue}
                      type='text'
                      hintText='Enter TodoItem Title'
                      style={{ margin: '5px' }}
                      id={'2'}/>
                    <FlatButton 
                      label='Add' 
                      onClick={this.handleSubmitAddItem}
                      disabled={chosenCategory.completed} />
                  </div>
                  <TodoItemsList
                    actions={actions}
                    itemsToRenderIds={chosenCategory.itemsIds}
                    parentCatLinkPath={chosenCategory.linkPath}
                    itemsStorage={itemsStorage}
                    filter={filter}
                    showCompleted={showCompleted}/>
                </div>)                
                : (<Redirect to={rootLinkpath}/>)
            }} />
            <Route path={linkPath + '/:itemName'} render={() => {
              return (
                <TodoItemEditForm 
                  todoItem={itemsStorage[chosenItemToEditId]}
                  todoItemId={chosenItemToEditId}
                  parentCatLinkPath={linkPath}
                  actions={actions}
                  filter={filter} />
              );
            }} />
            <Redirect to={rootLinkpath}/>
          </Switch>         
        </Paper>
      </main>
    );
  }
}
