//= require react

var Header = React.createClass({displayName: "Header",
  render: function() {
    React.createElement("div", null, this.props.title)
  }
})