// http://www.codewars.com/kata/react-flux

/********** Dispatcher **********/
const Dispatcher = {
  callbacks: [ ],

  dispatch(payload) {
    this.callbacks.forEach(callback => callback(payload));
  },

  register(callback) {
    this.callbacks.push(callback);
  }
};
/********************/

/********** Action **********/
const ItemAction = {
  saveItem(item) {
    api.save(item);
    
    Dispatcher.dispatch({
      actionType: ActionTypes.saveItem,
      item: item
    });
  }
};
/********************/

/********** Store **********/
const ItemStore = {
  getNewItem() {
    return { name: '' };
  }
};
Dispatcher.register(payload => {
  switch (payload.actionType) {
    case ActionTypes.saveItem:
      console.log(`${payload.item} saved successfully!`);
      break;
    default:
      break;
  }
});
/********************/

/********** Component **********/
const ItemPage = React.createClass({
  getInitialState() {
    return ItemStore.getNewItem();
  },

  change(e) {
    this.setState({ name: e.target.value });
  },

  saveItem() {
    ItemAction.saveItem(this.state.name);
  },

  render: function() {
    return (
      <div>
        <input name='itemName' value={this.state.name} onChange={this.change} />
        <a className='btn btn-default' onClick={this.saveItem}>Save</a>
      </div>
    );
  }
});
/********************/