
var play= document.getElementById('play');
var pause = document.getElementById('pause')

var stop = document.getElementById('stop')
var albumArt=document.getElementById('albumArt')
var artist= document.getElementById('artist')
var artist2= document.getElementById('artist2')
var gif = document.getElementById('gif')
var prev = document.getElementById('prev')



play.addEventListener('click',function(){
	x.playSong()
	// myAudio.src=songs[currentsong].url;
// 		myAudio.play();
//		songs[currentsong].url.currentTime=0;
 		// console.log(songs[currentsong].artwork)
 		albumArt.innerHTML= "<img src="+x.jukebox[x.songNumber].artwork+"width='100%' 'height=100%'>";
 		artist.innerHTML= x.jukebox[x.songNumber].songname +"<br>"+x.jukebox[x.songNumber].artist;
 		// gif.innerHTML="<img src='images/gif.gif'>" ;
 		// gif.style.backgroundSize= "90%";
 		// gif.style.backgroundRepeat='no-repeat'
 		albumArt.style.boxShadow='5px 5px 100px white';
 		artist2.style.animationPlayState = 'paused';
// 		artist2.innerHTML= songs[currentsong].songname +"<br>"+songs[currentsong].artist;
});
pause.addEventListener('click',function(){
	x.pauseSong()
	// songs[currentsong].url.currentTime=0
	center.style.backgroundImage = '';
	artist2.style.animationPlayState = 'running';
	albumArt.style.boxShadow='';
});
skip.addEventListener('click',function(){
	x.skipSong()
	x.playSong()
	albumArt.innerHTML= "<img src="+x.jukebox[x.songNumber].artwork+"width='100%' 'height=100%'>";
	artist.innerHTML= x.jukebox[x.songNumber].songname +"<br>"+x.jukebox[x.songNumber].artist;
	albumArt.style.boxShadow='5px 5px 100px white';
});
stop.addEventListener('click',function(){
	x.stopSong()
	albumArt.innerHTML=' '; 
		albumArt.style.boxShadow=''
		artist.innerHTML= '';

	});
prev.addEventListener('click',function(){
	x.prevSong()

});



// var myAudio=new Audio();


//play.addEventListener('click', function(){song.play()});
class Song{
	constructor(artist,songname,url,artwork){
		this.artist=artist;
		this.songname=songname;
		this.url=url;
		this.artwork=artwork;
		this.myAudio = new Audio(this.url)
	}

}

var currentsong=0;

class Jukebox{
	constructor(){
		this.jukebox=[];
		this.songNumber=0
	}
addSongs(song){
	this.jukebox.push(song);
}
 playSong(){
 	// this.jukebox[this.songNumber].url
 	this.jukebox[this.songNumber].myAudio.play();
 	console.log(this.songNumber)
 }
 pauseSong(){
 	this.jukebox[this.songNumber].myAudio.pause();

}
   skipSong(){
      this.jukebox[this.songNumber].myAudio.pause();
      this.songNumber++;
      if(this.songNumber > this.jukebox.length-1){
        this.songNumber = 0;
        this.jukebox[this.songNumber].url;
        this.jukebox[this.songNumber].myAudio.currentTime = 0;
        this.jukebox[this.songNumber].myAudio.play();


      }else {
        this.jukebox[this.songNumber].myAudio.currentTime = 0;
        this.jukebox[this.songNumber].myAudio.play();


      }
    }
stopSong(){
	this.jukebox[this.songNumber].myAudio.pause();
	this.jukebox[this.songNumber].myAudio.currentTime=0;
		

    }
 prevSong(){
 this.jukebox[this.songNumber].myAudio.pause();
 this.songNumber--;
 this.jukebox[this.songNumber].myAudio.play();

}
}


var song1=new Song('Jose Gonzalez','Heartbeats','audio/jose.mp3',"'images/jose.jpg'")
var song2=new Song('Frank Ocean','Nights','audio/nights.mp3',"'images/frank.jpg'")
var song3=new Song("Lil' Peep & XXXTENTACION",'Falling Down','audio/xxxpeep.mp3',"'images/peep.jpg'")
var song4=new Song ('The Knife','Heartbeats','audio/theknife.mp3',"'images/theknife.jpg'")
var song5=new Song ('Kid Cudi','Waisting My Minutes','audio/cudi.mp3',"'images/cudi.jpg'")
var song6=new Song ('The Rolling Stones','Wild Horses','audio/wildhorses.mp3',"'images/wildhorses.jpg'")
var song7=new Song ('Michael Jackson','P.Y.T','audio/pyt.mp3',"'images/pyt.jpg'")
var song8=new Song ('The Pharcyde',"Passin Me By",'audio/passinmeby.mp3',"'images/passinmeby.jpg'");
var song9 = new Song ('Charles Hamilton','Press C', 'audio/pressc.mp3',"'images/pressc.jpg'")
var song10 = new Song ('Ween','Tender Situation', 'audio/tendersituation.mp3',"'images/tendersituation.jpg'")


var x = new Jukebox()

x.addSongs(song1)
x.addSongs(song2)
x.addSongs(song3)
x.addSongs(song4)
x.addSongs(song5)
x.addSongs(song6)
x.addSongs(song7)
x.addSongs(song8)
x.addSongs(song9)
x.addSongs(song10)



// this code was from a draft of this jukebox.  i re-wrote the coe to include a jukebox class.
// skipSong(){
//  	if(currentsong==songs.length-1){
//  		currentsong=0
//  	playSong()

//  	// myAudio.src=songs[currentsong+=1].url;
//  	// myAudio.play()
//  }else{
//  	currentsong = currentsong + 1;

//  	myAudio.play(currentsong);

//  }}

// prevSong(){
//  	if(currentsong==0){
//  	playSong()

//  	// myAudio.src=songs[currentsong+=1].url;
//  	// myAudio.play()
//  }else{
//  	currentsong++;

//  	playSong();



// 	if (!myAudio.src) {
// 		myAudio.src=songs[currentsong].url;
// 		myAudio.play();
// 		songs[currentsong].url.currentTime=0;
// 		console.log(songs[currentsong].artwork)
// 		albumArt.innerHTML= "<img src="+songs[currentsong].artwork+"width='100%' 'height=100%'>";
// 		//artist.innerHTML= songs[currentsong].songname +"<br>"+songs[currentsong].artist;
// 		// gif.innerHTML="<img src='images/gif.gif'>" ;
// 		// gif.style.backgroundSize= "90%";
// 		// gif.style.backgroundRepeat='no-repeat'
// 		albumArt.style.boxShadow='5px 5px 100px white';
// 		artist2.style.animationPlayState = 'paused';
// 		artist2.innerHTML= songs[currentsong].songname +"<br>"+songs[currentsong].artist;
// 	}
// 	myAudio.play(currentsong);



//var songs=[song1,song2,song3,song4,song5,song6,song7,song8,song9,song10]
