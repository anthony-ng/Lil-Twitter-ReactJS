/** @jsx React.DOM */
//= require hashtag.react
//= require stores/hashtag-store
//= require stores/tweet-store
var Trends = React.createClass({displayName: 'Trends',
  getInitialState: function() {
    return {
      hashtags: HashtagStore.hashtags()
    }
  },
  componentWillMount: function() {
    $(HashtagStore).on('change', function() {
      this.setState({
        hashtags: HashtagStore.hashtags()
      })
    }.bind(this))
    HashtagStore.popular();
  },

  render: function() {
    var trends = [];
    this.state.hashtags.forEach(function(tag) {
      trends.push(Hashtag( {tag:tag} ))
    })
    return (
      React.DOM.section( {id:"trends-container"}, 
        React.DOM.h3(null, "Trends"),
        React.DOM.a( {href:"#all", onClick:this.allTweets}, "All"),
        React.DOM.ul(null, 
          trends
        )
      )
    )
  },

  allTweets: function(e) {
    e.preventDefault();
    TweetStore.recent();
  }
})
