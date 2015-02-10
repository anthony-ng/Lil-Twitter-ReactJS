//= require react
//= require components/twitter
//= require components/header


$(document).ready(function() {
  React.render(React.createElement(Twitter, null), $('.twitter-app')[0])
})