// document.addEventListener("contextmenu", (e) => {
//     e.preventDefault();                                   // FOR DISABLE RIGHT CLICK IN WINDOW
// } ,false);

//// to make navbar background colr black on scroll
window.addEventListener('scroll', () => {

  let navbar = document.querySelector('.navbar');
  let border_scroll = document.querySelector('#border_scroll');

  if (window.scrollY > 0) {
    navbar.classList.add('nav_border_scroll');
    // border_scroll.style.visibility = "visible";
  } else {
    navbar.classList.remove('nav_border_scroll');
    // border_scroll.style.visibility = "hidden";
  }

});


//// to make less_sidebar background colr black on scroll
window.addEventListener('scroll', () => {
  
  let less_sidebar = document.querySelector('.less_sidebar');

  if (window.scrollY > 0) {
    less_sidebar.classList.add('less_sidebar_scroll');
  } else {
    less_sidebar.classList.remove('less_sidebar_scroll');
  }

});

//// to make page reach on top after click on logo
let logo_container = document.querySelector(".logo_container");
logo_container.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//// ALL LEFT-RIGHT BTN SCROLL 
let scroll_1 = document.querySelector(".scroll_1");
function scroll_Left_1() {
  scroll_1.scrollBy({
    left: -1050,
    behavior: "smooth",
  });
}
function scroll_Right_1() {
  scroll_1.scrollBy({
    left: 1050,
    behavior: "smooth",
  });
}

let scroll_2 = document.querySelector(".scroll_2");
function scroll_Left_2() {
  scroll_2.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
}
function scroll_Right_2() {
  scroll_2.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
}

let scroll_3 = document.querySelector(".scroll_3");
function scroll_Left_3() {
  scroll_3.scrollBy({
    left: -1050,
    behavior: "smooth",
  });
}
function scroll_Right_3() {
  scroll_3.scrollBy({
    left: 1050,
    behavior: "smooth",
  });
}

let scroll_4 = document.querySelector(".scroll_4");
function scroll_Left_4() {
  scroll_4.scrollBy({
    left: -1050,
    behavior: "smooth",
  });
}
function scroll_Right_4() {
  scroll_4.scrollBy({
    left: 1050,
    behavior: "smooth",
  });
}

let scroll_5 = document.querySelector(".scroll_5");
function scroll_Left_5() {
  scroll_5.scrollBy({
    left: -1200,
    behavior: "smooth",
  });
}
function scroll_Right_5() {
  scroll_5.scrollBy({
    left: 1200,
    behavior: "smooth",
  });
}

//// to display the more_sidebar/less_sidebar after click on menu
let menu = document.querySelector(".menu");
let less_sidebar = document.querySelector(".less_sidebar");
let more_sidebar = document.querySelector(".more_sidebar");
let lessSidebarNone = less_sidebar.classList.contains('none');
menu.addEventListener("click", () => {
  if (lessSidebarNone) {
    more_sidebar.style.display = "none";
    less_sidebar.style.display = 'block';
    lessSidebarNone = false;
  } else {
    more_sidebar.style.display = "block";
    less_sidebar.style.display = "none";
    lessSidebarNone = true;
  }
});

//// to display the more_sidebar after click on media_new_menu
let media_new_menu = document.querySelector(".media_new_menu");
let mediaNewMenuClicked = false;
media_new_menu.addEventListener('click', () => {

  if (mediaNewMenuClicked === false && media_new_menu.classList.contains('ti-menu-2')) {

    more_sidebar.style.display = "block";
    media_new_menu.classList.remove('ti-menu-2')
    media_new_menu.classList.add('ti-x')
    mediaNewMenuClicked = true;

    setTimeout(() => {
      more_sidebar.classList.add('more_sidebar_transtaleX')
    }, 100);

  } else {
    more_sidebar.style.display = "none";
    media_new_menu.classList.remove('ti-x')
    media_new_menu.classList.add('ti-menu-2')
    mediaNewMenuClicked = false;
    
    // more_sidebar display after some time of click
    more_sidebar.classList.remove('more_sidebar_transtaleX')
    setTimeout(() => {
    }, 10000);

  }

});


//// profile dropdown after click on profile img
let profile_icon = document.querySelector("#profile_icon");
let profile_dropdown = document.querySelector(".profile_dropdown");
profile_icon.addEventListener("click", () => {
  profile_dropdown.classList.toggle("visible");

});


let more_icon_box = document.querySelector(".more_icon_box");
let recent_songs_img_box = document.querySelectorAll(".recent_songs_img_box");
let more_dropdown = document.querySelector(".more_dropdown");
more_icon_box.addEventListener("click", function () {
  console.log("more icon clicked");
  more_dropdown.style.visibility = "visible";
  more_dropdown.style.display = "block";
  recent_songs_img_box.forEach((imgBox) => {
    imgBox.addEventListener("mouseleave", function () {
      more_dropdown.style.display = "none";
    });
  });
});

let sign_in_text = document.querySelector(".sign_in_text");
let page_profile_name = document.querySelector(".page_profile_name");
let myUser_Data = JSON.parse(localStorage.getItem("myUserData"));
function checkLoginStatus() {
  if (localStorage.getItem("myUserData") === null) {
    sign_in_text.innerText = "Sign In";
    page_profile_name.innerText = "";
  } else {
    sign_in_text.innerText =
      myUser_Data.length > 0
        ? `${myUser_Data[0].first_name.toUpperCase()}`
        : "";
    page_profile_name.innerText =
      myUser_Data.length > 0
        ? `${myUser_Data[0].first_name.toUpperCase()} ${myUser_Data[0].last_name.toUpperCase()}`
        : "";
  }
}
checkLoginStatus();


// /////////// SONGS DATA ARRAY ////////////////

let songsData = [
  {
    id: "1",
    songDetails: `<h5 class="song_name">Aashiyan <br>
                            <p class="song_artist">Song • Pritam, Shreya Ghoshal &...</p>
                        </h5>`,
    cover: "./images/1.png",
  },
  {
    id: "2",
    songDetails: `<h5 class="song_name">Such Keh Raha Hai <br>
                            <p class="song_artist">Song • Harris Jayaraj</p>
                        </h5>`,
    cover: "./images/2.png",
  },
  {
    id: "3",
    songDetails: `<h5 class="song_name">Hind Ke Sitara <br>
                            <p class="song_artist">Song • Manoj Tiwari, Gayatri Thakur Vya...</p>
                        </h5>`,
    cover: "./images/3.png",
  },
  {
    id: "4",
    songDetails: `<h5 class="song_name">Aise Na Dekho <br>
                            <p class="song_artist">Song • A.R. Rahman</p>
                  </h5>`,
    cover: "./images/4.png",
  },
  {
    id: "5",
    songDetails: `<h5 class="song_name">Ve Kamleya (From "Rocky Aur Rani Kii.. <br>
                            <p class="song_artist">Song • Pritam, Arijit Singh, Shreya</p>
                        </h5>`,
    cover: "./images/5.png",
  },
  {
    id: "6",
    songDetails: `<h5 class="song_name">Sajni <br>
                            <p class="song_artist">Song • Arjit Singh</p>
                        </h5>`,
    cover: "./images/6.png",
  },
  {
    id: "7",
    songDetails: `<h5 class="song_name">Tu Mun Shudi (From...  <br>
                            <p class="song_artist">Song • A.R. Rahman & Rabbi</p>
                        </h5>`,
    cover: "./images/7.png",
  },
  {
    id: "8",
    songDetails: `<h5 class="song_name">Bhaag D.K. Bose, Aandhi Aayi <br>
                            <p class="song_artist">Song • Ram Sampath  & Imran Khan...</p>
                        </h5>`,
    cover: "./images/8.png",
  },
  {
    id: "9",
    songDetails: `<h5 class="song_name">MATARGASHTI <br>
                            <p class="song_artist">Song • Mohit Chauhan</p>
                        </h5>`,
    cover: "./images/9.png",
  },
  {
    id: "10",
    songDetails: `<h5 class="song_name">Teri Deewani <br>
                            <p class="song_artist">Song • Kailash Kher, Paresh Kamath &...</p>
                        </h5>`,
    cover: "./images/10.png",
  },
  {
    id: "11",
    songDetails: `<h5 class="song_name">Arjan Vailly <br>
                            <p class="song_artist">Song • Bhupinder Babbal</p>
                        </h5>`,
    cover: "./images/11.png",
  },
  {
    id: "12",
    songDetails: `<h5 class="song_name">Tum Ho <br>
                            <p class="song_artist">Song • Mohit Chauhan &...</p>
                        </h5>`,
    cover: "./images/12.png",
  },
  {
    id: "13",
    songDetails: `<h5 class="song_name">Dildaara (Stand By Me) <br>
                            <p class="song_artist">Song • Shafqat Amanat Ali</p>
                        </h5>`,
    cover: "./images/13.png",
  },

];





////////////// LOADING CSS AFTER CLICK PLAY BTN [variable already define] ////////////////
let recent_play_icon = document.querySelectorAll(".recent_play_icon");
let recent_play_icon_load = document.querySelectorAll(".recent_play_icon_load");
let recent_play_icon_box = document.querySelectorAll(".recent_play_icon_box");
let recent_song_img = document.querySelectorAll(".recent_song_img");
let music_player_container = document.querySelector(".music_player_container");

let img
recent_play_icon.forEach((icon, index) => {

 icon.addEventListener("click", function() {

    musicPlayerDisplay();

    /////////// to add img opacity after specific icon clicked
    // to access that specific img which icon we clicked 
    img = recent_song_img[index];

    // to remove opacity from same img after clicked again on that img
    if (img.classList.contains('clicked')) {
      img.classList.remove('clicked');
      return;
    }
    // to delete all img opacity after icon clicked
    recent_song_img.forEach(b => b.classList.remove('clicked'));

    // to add img opacity after specific icon clicked
    img.classList.add('clicked');

  });

});

let previosRecentPlayIcon;
let mainMasterPlay;
let currentPlayingButton = null;     //// denotes curent pause icon "icon which is playing song currently"
recent_play_icon_box.forEach((btn) => {

  btn.addEventListener("click", () => {

    // this denotes the current playing btn (pause-icon which is playing song) is not a btn we cicked, which means we clicked new btn to play music 
    if (currentPlayingButton && currentPlayingButton !== btn) {
      // access icon(play-pause) of  current playing btn
      const currentIcon = currentPlayingButton.querySelector("i");
      currentIcon.classList.remove("fa-pause");
      currentIcon.classList.add("fa-play");
      currentIcon.style.color = "white";
      currentPlayingButton.classList.remove("recent_icon_visible");
      // current song pause
      currentSong.pause();
      songPlaying = false;
      // master play icon add
      master_play_icon.classList.remove("fa-pause");
      master_play_icon.classList.add("fa-play");
    }


    // access icon(play-pause) of clicked btn
    let icon = btn.querySelector("i");

    // to access icon(specific recent btn) for master play icon
    mainMasterPlay = icon;

    // access load effects of click btn
    const load = btn.querySelector(".recent_play_icon_load");
    const isPlaying = icon.classList.contains("fa-pause");

    // to display play-pause icon after click same btn
    if (isPlaying) {
      // play icon
      icon.classList.remove("fa-pause");
      icon.classList.add("fa-play");
      icon.style.color = "white";
      btn.classList.remove("recent_icon_visible")
      currentPlayingButton = null;
      // current song pause
      currentSong.pause();
      songPlaying = false;
      // master play icon add
      master_play_icon.classList.remove("fa-pause");
      master_play_icon.classList.add("fa-play");


    } else {
      btn.classList.add("recent_icon_visible");
      // add Load effect 
      load.classList.add("load_border");
      load.classList.add("rotate");

      setTimeout(() => {
        // pause icon
        icon.classList.remove("fa-play");
        icon.classList.add("fa-pause");
        icon.style.color = "red"; 
        // remove load effect
        load.classList.remove("load_border");
        load.classList.remove("rotate");
        // current song play
        currentSong.play();
        songPlaying = true;
        // master pause icon add 
        master_play_icon.classList.remove("fa-play");
        master_play_icon.classList.add("fa-pause");
      }, 800);

      currentPlayingButton = btn;
    }

    
    
  });

});


//// to display music player container after Play icon clicked
function musicPlayerDisplay() {
  setTimeout(() => {
    music_player_container.classList.add("music_player_display");
  }, 800);
}


//// //////////////// MUSIC CONTROLLER //////////////////

let seek_slider_container = document.querySelector(".seek_slider_container");
let seekbar_primary = document.querySelector(".seekbar_primary");
let seekbar_secondary = document.querySelector(".seekbar_secondary");
let handle_seek = document.querySelector(".handle_seek");
////
let master_playbar = document.querySelectorAll(".master_playbar");
let play_footer_song_box = document.querySelector(".play_footer_song_box");
let master_play_icon = document.querySelector("#master_play_icon");
////
let skip_previous_song_box = document.querySelector(".skip_previous_song_box");
let skip_next_song_box = document.querySelector(".skip_next_song_box");
let skip_previous_icon = document.querySelector("#skip_previous_icon");
let skip_next_icon = document.querySelector("#skip_next_icon");
//
let cuurent_time = document.querySelector(".song_playing_time_current");
let total_time = document.querySelector(".song_playing_time_total");
//
let song_img = document.querySelector("#song_img");
let song_name = document.querySelector("#song_name");
let song_artist = document.querySelector("#song_artist");

let recent_song_info = document.querySelectorAll(".recent_song_info");
let Song_name = document.querySelectorAll(".song_name");
//
let song_info_box = document.querySelectorAll(".song_info_box");
//
let song_playing_name = document.querySelector(".song_playing_name");
//
let volume_slider = document.querySelector(".volume_slider");
let volume_value = document.querySelector(".volume_value");
let adjust_volume_icon = document.querySelector("#adjust_volume_icon");

// ////////////////////


let IndexTrack;
let songPlaying;
let currentSong = new Audio(`./songs/1.mp3`);

////////////////// RECENT SONG PLAY ///////////////////////
recent_play_icon.forEach((e) => {

  e.addEventListener("click", (el) => {

    IndexTrack = el.target.id;
    console.log(`Song Index : ${IndexTrack}`);
    currentSong.src = `./songs/${IndexTrack}.mp3`;
    // song_img.src = `./images/${IndexTrack}.png`;

    let songInfo = songsData.filter((els) => {
      return els.id === IndexTrack;
    });
    songInfo.forEach((elss) => {
      let {songDetails,cover} = elss;
      song_playing_name.innerHTML = songDetails;
      song_img.src = cover;

    });

  });

});

//// DISPLAY RECENT SONGS PLAYLIST'S SONG IMAGE AND NAME
Array.from(document.querySelectorAll(".playing_songs_boxes")).forEach((e,i) => {
  e.getElementsByTagName("img")[0].src = songsData[i].cover;
  e.getElementsByTagName("h5")[0].innerHTML = songsData[i].songDetails;
});

//// play-pause song by master play icon
play_footer_song_box.addEventListener("click", () => {

  if (songPlaying === true) {
    songPause()
  } else {
    songPlay();
  }

});


//// for auto play after the song has finished playing
currentSong.addEventListener("ended", PlayingNextSong)        // PlayingNextSong is define on 523 line no.

//// song Play function
function songPlay() {
  currentSong.play();
  songPlaying = true;

  // master pause icon add
  master_play_icon.classList.remove("fa-play");
  master_play_icon.classList.add("fa-pause");
  master_play_icon.setAttribute("title", "Pause");

  // recent pause icon add
  mainMasterPlay.classList.remove("fa-play");
  mainMasterPlay.classList.add("fa-pause");
  mainMasterPlay.style.color = "red";

}

//// song Pause function
function songPause() {
  currentSong.pause();
  songPlaying = false;

  // master play icon add
  master_play_icon.classList.remove("fa-pause");
  master_play_icon.classList.add("fa-play");
  master_play_icon.setAttribute("title", "Play");

  // recent play icon add
  mainMasterPlay.classList.remove("fa-pause");
  mainMasterPlay.classList.add("fa-play");
  mainMasterPlay.style.color = "white";

}


/////////// PREVIOUS SONG PLAY ///////////////
skip_previous_song_box.addEventListener("click", () => {

  if(current > 5) {

    // this secction of code is for when we click previous btn song will play from begining
    currentSong.src =`./songs/${IndexTrack}.mp3`;
    currentSong.play();
    song_img.src = `./images/${IndexTrack}.png`;
    song_playing_name.innerHTML = songsData[IndexTrack - 1].songDetails;
    songPlaying = true;
    console.log(`Song Index: ${IndexTrack}`);

  } else if(IndexTrack > 1 && current < 5) {

    // this section of code is for when we click previous btn song will play previous song 
    IndexTrack--;
    currentSong.src =`./songs/${IndexTrack}.mp3`;
    currentSong.play();
    song_img.src = `./images/${IndexTrack}.png`;
    song_playing_name.innerHTML = songsData[IndexTrack - 1].songDetails;
    songPlaying = true;
    console.log(`Song Index: ${IndexTrack}`);

  } else {

    // gives us only last song of songsData array
    IndexTrack = songsData.length;                  // songsData.length = 13 (we do .lenth so it can direcct to last song)
    currentSong.src = `./songs/${IndexTrack}.mp3`;
    currentSong.play();
    song_img.src = `./images/${IndexTrack}.png`;
    song_playing_name.innerHTML = songsData[IndexTrack - 1].songDetails;
    songPlaying = true;
    console.log(`Song Index: ${IndexTrack}`);

  }
  
  // recent play style disabled
  mainMasterPlay.classList.remove("fa-pause");
  mainMasterPlay.classList.add("fa-play");
  mainMasterPlay.style.color = "white";
  currentPlayingButton.classList.remove("recent_icon_visible");
  
  // changing recent song img opacity = 1
  if (img.classList.contains('clicked')) {
    img.classList.remove('clicked');
    return;
  }

});




//////////// NEXT SONG PLAY /////////////
skip_next_song_box.addEventListener("click", PlayingNextSong);

function PlayingNextSong() {

  if(IndexTrack < songsData.length) {
    
    IndexTrack++;
    currentSong.src =`./songs/${IndexTrack}.mp3`;
    currentSong.play();
    song_img.src = `./images/${IndexTrack}.png`;
    song_playing_name.innerHTML = songsData[IndexTrack - 1].songDetails;
    songPlaying = true;
    console.log(`Song Index: ${IndexTrack}`);
    
  } else {
    
    IndexTrack = (songsData.length + 1) - songsData.length;   // OR simply write (1) // simple this equation = 1,because(songsData.length=13)
    currentSong.src = `./songs/${IndexTrack}.mp3`;
    currentSong.play();
    song_img.src = `./images/${IndexTrack}.png`;
    song_playing_name.innerHTML = songsData[IndexTrack - 1].songDetails;
    songPlaying = true;
    console.log(`Song Index: ${IndexTrack}`);

  }

  // to change master_play_icon after click next song
  if (master_play_icon.classList.contains('fa-play')) {
    master_play_icon.classList.remove('fa-play');
    master_play_icon.classList.add('fa-pause');
  }

  // recent play style disabled
  mainMasterPlay.classList.remove("fa-pause");
  mainMasterPlay.classList.add("fa-play");
  mainMasterPlay.style.color = "white";
  currentPlayingButton.classList.remove("recent_icon_visible");
  
  // changing recent song img opacity = 1
  if (img.classList.contains('clicked')) {
    img.classList.remove('clicked');
    return;
  }

}





///////////// Current Song Time Stamp Update //////////////

var duration;      // assigning early bcz it's being use in other place too
var current;       // assigning early bcz it's being use in other place too
// loadmetadata is used to load songs duration data so it can  play without showing (error NAN for a sec)
currentSong.addEventListener("loadedmetadata", () => {

  // for current song duration update & min, sec for duration
  duration = currentSong.duration
  let min2 = Math.floor(duration / 60);
  let sec2 = Math.floor(duration % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }
  total_time.innerHTML = `${min2}:${sec2}`;

});


//// for song cuurent time & seekbar update
currentSong.addEventListener("timeupdate", () => {

  // song current time update & min, sec for current time
  current = currentSong.currentTime;
  let min1 = Math.floor(current / 60);
  let sec1 = Math.floor(current % 60);
  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  cuurent_time.innerHTML = `${min1}:${sec1}`;


  // for seek bar update automatically
  let progressbar = current / duration * 100;
  seekbar_secondary.style.width = `${progressbar}%`;
  handle_seek.style.left = `${progressbar}%`;
  
});

//////////////////  SEEKBAR UPDATE ON CLICK & DRAGGING { FOR BOTH MOBILE & DESKTOP} ////////////////////////////////

let isDragging = false;
function updateSeekbar(ev) {

  let clickX = ev.clientX - seek_slider_container.getBoundingClientRect().left;  // to tell inside el length after click from left red color line area (secondary seekbar)
  let newWidth = clickX / seekbar_primary.offsetWidth;        //// offsetWidth represents full width of the el with include (borders,margin,padding)

  currentSong.currentTime = newWidth * currentSong.duration;  // to change cuurent time of song as per click on seekbaar 
  seekbar_secondary.style.width = `${newWidth * 100}%`;
  handle_seek.style.left = `${newWidth * 100}%`;

}


///////////  FOR DESKTOP DRAG SEEKBAR ////// 
seek_slider_container.addEventListener('mousedown', (ev) => {

  isDragging = true;
  updateSeekbar(ev);
  ev.preventDefault();
  
  // to increase scale of handle seekbar when dragging slider 
  handle_seek.style.transform = 'scale(1.4)';

});

seek_slider_container.addEventListener('mousemove', (ev) => {

  if (isDragging) {
    updateSeekbar(ev);
  }

});

seek_slider_container.addEventListener('mouseup', (ev) => {
  isDragging = false;
  
  // to default scale of handle seekbar when dragging slider 
  handle_seek.style.transform = 'scale(1)';
});

seek_slider_container.addEventListener('mouseleave', (ev) => {
  isDragging = false;
  
  // to default scale of handle seekbar when dragging slider 
  handle_seek.style.transform = 'scale(1)';
});


///////////  FOR MOBILE TOUCH SEEKBAR ////// 
seek_slider_container.addEventListener('touchstart', (ev) => {
  isDragging = true;
  updateSeekbar(ev.touches[0]);
  
});

seek_slider_container.addEventListener('touchmove', (ev) => {
  ev.preventDefault();
  if (isDragging) {
    updateSeekbar(ev.touches[0]);
  }
});

seek_slider_container.addEventListener('touchend', (ev) => {
  isDragging = false;
  
});


///////////// VOLUME CONTROL //////////////
let previousVol;                     // save vol value before slider was muting
let isMuted = false;                // whether the slider is muted or not (false = muted & true = unmuted)
let vol;     // volume of the slider

volume_slider.addEventListener("input", () => {

  vol = volume_slider.value;
  currentSong.volume = vol / 100 ;
  volume_value.innerHTML = `${vol}%`;

  // icon change for volume up down 
  if (!isMuted) {
    if (vol == 0) {
      adjust_volume_icon.classList.remove("fa-volume-high");
      adjust_volume_icon.classList.remove("fa-volume-low");
      adjust_volume_icon.classList.add("fa-volume-xmark");
    } else if (vol > 0 && vol <= 40) { 
      adjust_volume_icon.classList.remove("fa-volume-xmark");
      adjust_volume_icon.classList.remove("fa-volume-high");
      adjust_volume_icon.classList.add("fa-volume-low");
    } else {
      adjust_volume_icon.classList.remove("fa-volume-xmark");
      adjust_volume_icon.classList.remove("fa-volume-low");
      adjust_volume_icon.classList.add("fa-volume-high");
    } 
  }

});

// mute-unmute vol icon on click
adjust_volume_icon.addEventListener("click", volMuteToggle);

// mute-unmute vol function
function volMuteToggle() {

  if (!isMuted) {
    // mute
    previousVol = volume_slider.value    // save previous vol value for unmuting later 
    volume_slider.value = 0
    currentSong.volume = 0;
    volume_value.innerHTML = `0%`
    adjust_volume_icon.classList.add("fa-volume-xmark");
    adjust_volume_icon.setAttribute("title", "Unmute");
    isMuted = true;

  } else {
    
    // unmute
    volume_slider.value = previousVol             // adding vol val previously save
    currentSong.volume = previousVol / 100;       //  song vol value as per previous vol
    volume_value.textContent = `${previousVol}%`

    // update vol icon after unmute
    if (previousVol == 0) {

      adjust_volume_icon.classList.remove("fa-volume-high");
      adjust_volume_icon.classList.remove("fa-volume-low");
      adjust_volume_icon.classList.add("fa-volume-xmark");

    } else if (previousVol > 0 && previousVol <= 40) {

      adjust_volume_icon.classList.remove("fa-volume-xmark");
      adjust_volume_icon.classList.remove("fa-volume-high");
      adjust_volume_icon.classList.add("fa-volume-low")
      adjust_volume_icon.setAttribute("title", "Mute");

    } else {

      adjust_volume_icon.classList.remove("fa-volume-xmark");
      adjust_volume_icon.classList.remove("fa-volume-low");
      adjust_volume_icon.classList.add("fa-volume-high");
      adjust_volume_icon.setAttribute("title", "Mute");

    } 
    isMuted = false;

  }

}


// vol slider appear on hover on vol icon
let volume_slider_box = document.querySelector(".volume_slider_box");
let vol_icon_box = document.querySelector(".vol_icon_box");
vol_icon_box.addEventListener("mouseover", () => {
  // visible when mouseover on icon box
  volume_slider.style.opacity = 1;
  volume_value.style.opacity = 1;

  volume_slider_box.addEventListener("mouseleave", () => {
  // hidden when mouseleave from volume slider box
    volume_slider.style.opacity = 0;
    volume_value.style.opacity = 0;

  });

});



//////// Like-Dislike btn ///////////////////
let like_box = document.querySelector(".like_box");
let like_icon = document.querySelector("#like_icon");
let unlike_box = document.querySelector(".unlike_box");
let unlike_icon = document.querySelector("#unlike_icon");

let likeClick = false;
let unlikeClick = false;
like_box.addEventListener("click", () => {

  if (!likeClick) {
    // likeIcon change
    like_icon.innerHTML = `<span title="I Unlike This" class="material-icons" id="like_icon"> thumb_up </span>`;
    likeClick = true;

    // dislike icon change bcz (if like click then client click dislike then it should automatically off like icon) 
    unlike_icon.innerHTML = `<span title="I Dislike This" class="material-icons-outlined" id="like_icon"> thumb_down </span>`;
    unlikeClick = false

  } else {
     like_icon.innerHTML = `<span title="Like" class="material-icons-outlined" id="like_icon"> thumb_up </span>`;
    likeClick = false;

  }

});

unlike_box.addEventListener("click", () => {

  if (!unlikeClick) {
    // dislikeIcon change
    unlike_icon.innerHTML = `<span title="Undo Dislike" class="material-icons" id="like_icon"> thumb_down </span>`;
    unlikeClick = true;

    // like icon change bcz (if dislike click then client click like then it should automatically off dislike icon)
    like_icon.innerHTML = `<span title="Like" class="material-icons-outlined" id="like_icon"> thumb_up </span>`;
    likeClick = false;

  } else {
    unlike_icon.innerHTML = `<span title="I Dislike This" class="material-icons-outlined" id="like_icon"> thumb_down </span>`;
    unlikeClick = false;

  }

});




///////// REPEAT SONG  ////////////////  
let repeat_icon_box = document.querySelector(".repeat_icon_box");
let repeat_icon = document.querySelector("#repeat_icon");
let repeatClick = false;

repeat_icon_box.addEventListener("click", () => {

  if (repeatClick === false) {

    // repeat selected song
    repeat_icon.style.color = "white";
    repeat_icon.parentElement.setAttribute("title", "Repeat Off")
    currentSong.removeEventListener("ended", PlayingNextSong);
    currentSong.loop = true;        // makes audio and video run in loop
    repeatClick = true;

  } else if (repeatClick === true) {
    
    // repeat off
    repeat_icon.parentElement.setAttribute("title", "Repeat")
    repeat_icon.style.color = "rgb(169, 159, 159)";
    currentSong.addEventListener("ended", PlayingNextSong);
    currentSong.loop = false;       // makes audio and video stop from loop
    repeatClick = false;

  }  
});



/////////// SHUFFLE SONG  ////////////////
let shuffle_icon_box = document.querySelector(".shuffle_icon_box");
let shuffle_icon = document.querySelector("#shuffle_icon");

// Shuffle song event listener
shuffle_icon_box.addEventListener("click", () => {

  shuffle_icon.parentElement.setAttribute("title", "Shuffle")
  currentSong.removeEventListener("ended", PlayingNextSong);
  shuffleSong();

});

// function for shuffleSong
function shuffleSong() {

  // generating random no. between 1-13 (that is id)
  let shuffleIndx = Math.floor(Math.random() * songsData.length + 1);
  currentSong.src = `./songs/${shuffleIndx}.mp3`;
  song_img.src = `./images/${shuffleIndx}.png`;

  // finding same [shuffle playing id (shuffleIndx) === songsData.id]
  let idata = songsData.find((i) => {
    return i.id == shuffleIndx
  });

  // update songs details with shuffle information (idata)
  song_playing_name.innerHTML = idata.songDetails
  currentSong.play();
  console.log(`Shuffle Song Index: ${shuffleIndx}`)

}





////////////////// ALL " PHYSICAL KEYBOARD KEY'S " EVENT LISTENERS //////////////////////

let key;

// space btn event listener
document.addEventListener("keydown", (ev) => {

  // play-pause by clicking SPACEBAR
  key = ev.code;
  if (key === "Space" || key === "KeyK") {

    if (songPlaying === false) {
      songPlay();
      mainMasterPlay.classList.remove("fa-play");
      mainMasterPlay.classList.add("fa-pause");
    } else {
     songPause()
     mainMasterPlay.classList.remove("fa-pause");
     mainMasterPlay.classList.add("fa-play");
    }

  } 

  // Prevent the default action to avoid scrolling the page
  ev.preventDefault();
});


// Key M btn event listener
document.addEventListener("keyup", (ev) => {

  // mute-unmute by clicking key: M
  key = ev.code;
  if (key == "KeyM") {
    volMuteToggle()
  }

  // Prevent the default action if any
  ev.preventDefault();
});


// Lft-Right arrow btn event listener
document.addEventListener("keydown", (ev) => {

  // .code access the key we click 
  key = ev.code;

  if (key == "ArrowRight") {
    // this single line making song skip 10 sec
    currentSong.currentTime += 5;

  } else if(key == "ArrowLeft") {
    // this single line making song skip 10 sec
    currentSong.currentTime -= 5;
  }

  // Prevent the default action if any
  ev.preventDefault();
});






















