//= require react
//= require components/header

var Twitter = React.createClass({displayName: "Twitter",
  render: function() {
    return (
      React.createElement(Header, {title: "Hello"})
      // <div>Hello</div>

    )
  }
})