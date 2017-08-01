var React = require('react');
var ReactDOM = require('react-dom');

var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap']
    }
  },
  render: function(){
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
        <ul>
          <li>{this.state.todos[0]}</li>
          <li>{this.state.todos[1]}</li>
          <li>{this.state.todos[2]}</li>
        </ul>
      </div>
    );
  }
});

var myCheese={name: 'Camenbert', smellFactor: 'Extreme pong', price: '$3.50'};

ReactDOM.render(<TodoComponent />, document.getElementById('todo-wrapper'));
