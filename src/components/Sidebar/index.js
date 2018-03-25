import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import TodoCategoriesList from '../TodoCategoriesList';
import uid from 'uid';
import { nameToUrl } from '../../utils/url-name-transforms';

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCategoryValue: ''
    };
  }

  handleAddCategoryInput = (e) => {
    this.setState({
      addCategoryValue: e.target.value
    })
  }

  submitCategoryAdd = () => {
    if (this.state.addCategoryValue) {
      const name = this.state.addCategoryValue;
      const linkPath = this.props.root.linkPath + nameToUrl(name);
      this.props.actions.AddCategory('root', this.state.addCategoryValue, uid(8), linkPath);
      this.setState({
        addCategoryValue: ''
      });
    }
    
  }

  render() {    
    return (
      <aside style={{
        flexGrow: '1',
        maxWidth: '500px',
        height: '600px',
        margin: '10px'
      }}>
        <Paper zDepth={1} style ={{
          width: '100%',
          height: '100%',
        }}>
          <div style ={{
            marginLeft: '5px',
            marginBottom: '20px'
          }}>
            <TextField
              type='text'
              hintText='Enter Category Title'
              style={{ margin: '5px' }}
              id={'2'}
              value={this.state.addCategoryValue}
              onChange={this.handleAddCategoryInput} />
            <FlatButton label='Add' onClick={this.submitCategoryAdd} />
          </div>
          <Route render={(props) => (
            <TodoCategoriesList 
              {...props} 
              actions={this.props.actions}
              root={this.props.root}
              categoriesStorage={this.props.categoriesStorage}
              chosenItemToEditId={this.props.chosenItemToEditId}
              showCompleted={this.props.showCompleted}
              filter={this.props.filter} />
          )} />
          
        </Paper>
      </aside>
    );
  }
}