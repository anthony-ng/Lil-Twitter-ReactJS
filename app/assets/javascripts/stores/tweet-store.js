var TweetStore = {
    CHANGE_EVENT: 'change',
    tweets: [],
    recent: function() {
        $.ajax({
        url: '/tweets/recent',
        type: 'GET'
    })
    .done(function(serverResponse) {
    // setting a State name tweets. setState is a built-in React method
        this.tweets = serverResponse;
        this.triggerChange(serverResponse);
        }.bind(this))
    },
    tweet: function(data) {
        $.ajax({
            url: '/tweets',
            type: 'POST',
            data: {tweet: data}
        })
        .done(function(response) {
            this.tweets.unshift(response);
            this.triggerChange();
        }.bind(this))
    },

    onChangeEvent: function(callback) {
        $(this).on(this.CHANGE_EVENT, callback)
    },

    triggerChange: function(response) {
        $(this).trigger(this.CHANGE_EVENT, [response])
    }

}
