const btn = document.querySelector(".logo-button")
const video = document.querySelector(".intro-video")

btn.addEventListener('click' , function(){
    if(!!(video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2)){
        video.classList.remove("active")
        btn.classList.remove("dance")
        video.pause();
    }else{
        video.classList.add("active")
        btn.classList.add("dance")
        video.play();
    }
})

video.addEventListener("ended" , function(){
    video.classList.remove("active")
    btn.classList.remove("dance")
})