// http://www.codewars.com/kata/react-with-jsx

let React = require('react')

var myHeader = React.createElement('h1', null
  , 'My three favorite codewarriors are gabrielsiedler, ppgnutzmann and wgrisa');

var CodewarsLink = React.createClass({
  render: function() {
    let url = `http://www.codewars.com/users/${this.props.user}`;
    return (
      <a href={url}>{this.props.user}</a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    return (
      <div>
        {this.props.leaders.map((l) => 
          <CodewarsLink user={l} key={l} />
        )}
      </div>
    );
  }
});