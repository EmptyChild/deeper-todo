import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, makeSelectable} from 'material-ui/List';
import TodoCategoriesListItem from './TodoCategoriesListItem';

let SelectableList = makeSelectable(List);

export default class TodoCategoriesList extends Component {

  static propTypes = {
    children: PropTypes.arrayOf(PropTypes.node),
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null
    };
  }

  handleRequestChange = (value) => {
    this.setState({
      selectedIndex: value,
    });
  }
  

  render() {
    const { root, categoriesStorage, showCompleted } = this.props;
    const renderTodoCategories = (todoCatsIds) => {
      const renderCategoryItem = (todoCatId) => {
        return (
          <TodoCategoriesListItem
            key={todoCatId}
            value={todoCatId}
            id={todoCatId}
            selectedIndex={this.state.selectedIndex}
            todoCategoryItem={categoriesStorage[todoCatId]}
            renderNestedList={renderTodoCategories}
            handleRequestChange={this.handleRequestChange}
            actions={this.props.actions}
            chosenItemToEditId={this.props.chosenItemToEditId}
            filter={this.props.filter} />
        )
      };
      const categoriesToRender = todoCatsIds.filter(catId => showCompleted || categoriesStorage[catId].visible);
      return categoriesToRender.map(renderCategoryItem);
    };
    return (
      <SelectableList
        value={this.state.selectedIndex}
        onChange={this.handleRequestChange}>
        {renderTodoCategories(root.categoriesIds)}
      </SelectableList>
    );
  }

}