// Data for the "HTML Video" Page

var video = {
    controls: true, 
    width: 320,
    height: 240,
    source: [
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.mp4", type: "video/mp4"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.ogg", type: "video/ogg"},
        {src: "https://scs.senecac.on.ca/~patrick.crawford/shared/fall-2016/int222/movie.webm", type: "video/webm"}
    ]
};

window.onload=function (){
    var vid = document.createElement("video");
    vid.controls = video.controls;
    vid.width = video.width;
    vid.height = video.height;
    var source = null;
    for (var i=0; i<video.source.length; i++){
        source = document.createElement("source");
        source.src = video.source[i].src;
        source.type = video.source[i].type;
        vid.appendChild(source);
    }
    myvideo.appendChild(vid);
}