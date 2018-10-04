
// var play= document.getElementById('play');
// var pause = document.getElementById('pause')

var stop = document.getElementById('stop')
var albumArt=document.getElementById('albumArt')
var artist= document.getElementById('artist')
var gif = document.getElementById('gif')

//play.addEventListener('click', function(){song.play()});
class song{
	constructor(artist,songname,url,artwork){
		this.artist=artist;
		this.songname=songname;
		this.url=url;
		this.artwork=artwork;
	}

}
var song1=new song('Jose Gonzalez','Heartbeats','audio/jose.mp3',"'images/jose.jpg'")
var song2=new song('Frank Ocean','Nights','audio/nights.mp3',"'images/frank.jpg'")
var song3=new song("Lil' Peep & XXXTENTACION",'Falling Down','audio/xxxpeep.mp3',"'images/peep.jpg'")
var song4=new song ('The Knife','Heartbeats','audio/theknife.mp3',"'images/theknife.jpg'")
var song5=new song ('Kid Cudi','Waisting My Minutes','audio/cudi.mp3',"'images/cudi.jpg'")
var song6=new song ('The Rolling Stones','Wild Horses','audio/wildhorses.mp3',"'images/wildhorses.jpg'")
var song7=new song ('Michael Jackson','P.Y.T','audio/pyt.mp3',"'images/pyt.jpg'")
var song8=new song ('The Pharcyde',"Passin Me By",'audio/passinmeby.mp3',"'images/passinmeby.jpg'");
var song9 = new song ('Charles Hamilton','Press C', 'audio/pressc.mp3',"'images/pressc.jpg'")
var song10 = new song ('Ween','Tender Situation', 'audio/tendersituation.mp3',"'images/tendersituation.jpg'")



var songs=[song1,song2,song3,song4,song5,song6,song7,song8,song9,song10]

var currentsong=0

var myAudio=new Audio();

function playSong(){
	myAudio.src=songs[currentsong].url;
	myAudio.play();
	console.log(songs[currentsong].artwork)
	albumArt.innerHTML= "<img src="+songs[currentsong].artwork+"width='100%' 'height=100%'>";
	artist.innerHTML= songs[currentsong].songname +"<br>"+songs[currentsong].artist;
	gif.innerHTML="<img src='images/gif.gif'>" ;
	gif.style.backgroundSize= "90%";
	gif.style.backgroundRepeat='no-repeat'
	albumArt.style.boxShadow='5px 5px 100px white'

}


function pauseSong(){
	myAudio.pause()
	center.style.backgroundImage = '';
}

 function skipSong(){
 	if(currentsong==songs.length-1){
 		currentsong=0
 	playSong()

 	// myAudio.src=songs[currentsong+=1].url;
 	// myAudio.play()
 }else{
 	currentsong++;

 	playSong();

 }}

function stopSong(){
	pauseSong()
	albumArt.innerHTML=' ';
	albumArt.style.boxShadow=''
	artist.innerHTML= '';


}


// var art = document.getElementById('art');

// play.addEventListener('click', getArt)
// function getArt(){
// art.style.innerHTML=('hi');
// }

//var song2 = new Audio('audio/nights.mp3');

play.addEventListener('click',playSong)
pause.addEventListener('click',pauseSong)
skip.addEventListener('click',skipSong)
stop.addEventListener('click',stopSong)