
class Track {
  constructor(title,rating,length) {
    this.title = title;
    this.rating = rating;
    this.length = length;
  }

}

class Playlist {
  constructor(name, tracks) {
    this.tracks = tracks;
    this.name = name;
  }

  overallRating() {
    let sum = 0;
    this.tracks.forEach((elm) => {
      sum += elm.rating;
    });
    let avgRating = sum / tracks.length;
    return avgRating;
  }

  totalDuration () {
    let sum = 0;
    this.tracks.forEach((elm) => {
      sum += elm.length;
    });
    return sum;
  }
}

class Library {
  constructor(name, creator, playlists) {
    this.playlists = playlists;
    this.name = name;
    this.creator = creator;
  }
}
let tracks = [new Track('hello', 3, 93), new Track('hello2', 5, 123)];
let myPlaylist =  new Playlist('my', tracks);
let myPlaylist2 =  new Playlist('second', tracks);
let mylibrary = new Library ('favorit','ghs',[myPlaylist , myPlaylist2]);
console.log(myPlaylist.totalDuration());
console.log(myPlaylist.overallRating());
console.log(mylibrary);


