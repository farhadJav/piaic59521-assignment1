function make_album(name,title,noofTracks)
{
var album = {name,title,noofTracks};
if(noofTracks)
console.log("artist name: " + album.name+ ", album title: " +album.title + " albumsno of tracks:" + album.noofTracks);
else
console.log("artist name: " + album.name+ ", album title: " +album.title);
}

make_album('Artist a','a');
make_album('Artist b','b');
make_album('Artist c','c','3');