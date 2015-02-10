//= require react

var Twitter = React.createClass({
  render: function() {
    return (
      <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Lil' Twitter API</title>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="styles/app.css">
  </head>
  <body>
    <header id="top-nav">
      <div id="brand">Lil' Twitter API</div>
      <form id="search-form">
        <input id="search" type="text" name="query">
      </form>
      <i class="fa fa-search"></i>
    </header>
    <section class="container">
      <section id="tweet-box">
        <p id="tweet-box-title">Compose New Tweet</p>
        <form id="tweet-form">
          <textarea id="new-tweet" cols="30" rows="5" maxlength="140" name="tweet"></textarea>
          <input type="submit" value="Tweet">
        </form>
      </section>
      <section id="trends-container">
        <h3>Trends</h3>
        <ul>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
          <li>filler</li>
        </ul>
      </section>
      <section id="tweets-container">
        <h3>Tweets</h3>
        <ul>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
          <li class="tweet">
            <img class="avatar" src="https://pbs.twimg.com/profile_images/2858734172/db7da718fd369eba6184973631d7d84a_bigger.jpeg" alt="">
            <div class="tweet-content">
              <p>
                <span class="full-name">Sam Samskies</span>
                <span class="username">@SamSamskies</span>
                <span class="timestamp">- 6m</span>
              </p>
              <p>My latest contribution to the advancement of the human race. I present to you ver 0.0.1 of http://mileyroids.com/  #Mileyroids #miley haha :)</p>
            </div>
          </li>
        </ul>
      </section>
    </section>
  </body>
</html>


    )
  }
})