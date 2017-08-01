var React = require('react');
var ReactDOM = require('react-dom');

var TodoComponent = React.createClass({
  getInitialState: function(){
    return {
      todos: ['wash up', 'eat some cheese', 'take a nap'],
      age: 30
    }
  },
  render: function(){
    var ager = setTimeout(function(){
      this.setState({
        age: 35
      });
    }.bind(this), 5000);
    return(
      <div id="todo-list">
        <p>The busiest people have the most leisure...</p>
       <p>{this.state.age}</p>
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
