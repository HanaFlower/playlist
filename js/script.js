/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Me and U", "Bad Boy","Idol","I'm Fine", "Solo"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above
var artists = ["SUPER JUNIOR", "Red Relvet", "BTS", "BTS", "JENNIE"];
var songLengths = ["3:21", "3:30","4:20", "4:00", "2:49"];
var imageUrl = ["https://is4-ssl.mzstatic.com/image/thumb/Music118/v4/06/b4/5a/06b45ab8-9f50-0074-5b35-d60cb07670ef/SJ_REPLAY_Digital_Cover.jpg/268x0w.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Red_Velvet_The_Perfect_Red_Velvet_Cover.jpg/220px-Red_Velvet_The_Perfect_Red_Velvet_Cover.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg/220px-BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg", "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg/220px-BTS%2C_Love_Yourself_Answer%2C_album_cover.jpg","https://pre00.deviantart.net/f74f/th/pre/f/2018/316/5/5/jennie__blackpink____solo_by_akari_airi_12-dcru5jx.jpg"];
var linkAddress = ["https://open.spotify.com/track/4AalpFiUPkAGdHAmVSXBxh","https://youtu.be/J_CFBjAyPWE", "https://youtu.be/K1scjjbfNsk", "https://open.spotify.com/track/0EQMrxdeiBhry9JCxskko3", "https://youtu.be/b73BI9eUkjM"];

    // BELOW Use forEach Loop to display the data from each of your array's in the correct div

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
