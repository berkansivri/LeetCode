/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.tweets = []
  this.follows = {}
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.tweets.push({
    userId,
    tweetId
  })
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  const feed = []
  for (let i = this.tweets.length - 1; i >= 0 && feed.length < 10; i--) {
    if (this.tweets[i].userId === userId || (this.follows[userId] && this.follows[userId].includes(this.tweets[i].userId)))
      feed.push(this.tweets[i].tweetId)
  }
  return feed
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  if (!this.follows[followerId]) this.follows[followerId] = []
  if (!this.follows[followerId].includes(followeeId))
    this.follows[followerId].push(followeeId)
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.follows[followerId]) return
  let index = this.follows[followerId].indexOf(followeeId)
  if (index > -1)
    this.follows[followerId].splice(index, 1)
};

let twitter = new Twitter();
twitter.postTweet(1, 5);
twitter.getNewsFeed(1);
twitter.follow(1, 2);
twitter.postTweet(2, 6);
twitter.getNewsFeed(1);
twitter.unfollow(1, 2);
twitter.getNewsFeed(1);

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */