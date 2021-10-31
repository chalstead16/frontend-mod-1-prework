/*
In the space below, add to the existing skeleton of a Tweet class.

- A tweet should have a (dynamic) author, content, timeStamp, numberOfLikes, and comments.
- A tweet should be able to increment the numberOfLikes and add to the list of comments.

Create several instances of your Tweet and log them to the console. Make sure the
tweet object instances _behave_ as expected.
*/

class Tweet {
  constructor(author, content, timeStamp, numberOfLikes, comments){
    this.author = author;
    this.content = content;
    this.timeStamp = timeStamp;
    this.numberOfLikes = numberOfLikes;
    this.comments = comments;
  }
  addLikes(){
    this.numberOfLikes++;
  }
  addComment(newComment){
    this.comments.push(newComment);
  }

}

var userCasey = new Tweet("Casey H.", "Wazzaahhh?!", "3:30 pm", 5, ["Just Chillin'!", "Watching the game!", "Tweeting! Bark!"]);
console.log(userCasey);

var userZach = new Tweet("Zach H.", "This Iowa game is killing me!", "1:15 pm", 2, ["Iowa needs this win!", "Come on Hawks!", "Football Saturdays <3"]);
console.log(userZach);

var userZoey = new Tweet("Zoey H.", "Dogs are on twitter now!", "10:00 am", 1000, ["Uh how are you typing?!", "Zoey is the cutest puppy <3", "Puppies in tech!"]);
console.log(userZoey);

userCasey.addLikes();
console.log(userCasey);

userZach.addComment("Win it back Iowa!");
console.log(userZach);

userCasey.addComment("When's dinner?! I'm hungry!");
console.log(userCasey);

userZoey.addComment("Dogs > Cats!");
console.log(userZoey);
