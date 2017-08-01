var React = require('react');
var ReactDOM = require('react-dom');

var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap', 'buy flowers'],
    }
  },
  render: function(){
      var todos = this.state.todos;
      todos = todos.map(function(item, index){
        return(
          <li>{item + "!"}</li>
        )
      });
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>
          {todos}
        </ul>
      </div>
    );
  }
});

var myCheese={name: 'Camenbert', smellFactor: 'Extreme pong', price: '$3.50'};

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
