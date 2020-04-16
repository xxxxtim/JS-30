//宣告變數
const player = document.getElementsByClassName('player')[0];
// console.log(player);
// const video = player.getElementsByClassName('.viewer')[0];//影片
const video = player.querySelector('.viewer');//影片
// console.log(video);
const progress = player.querySelector('.progress');// 進度條
const progressBar = player.querySelector('.progress__filled');// 進度條
const toggle = player.querySelector('.toggle'); // 暫停播放鍵
const ranges = player.querySelectorAll('.player__slider'); // 聲音 速度
const skipBtns = player.querySelectorAll('[data-skip]'); // 前後快轉
// console.table(skipBtns)

//建立function
function togglePlay() {
    //影片暫停或播放
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
}//togglePlay
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay)

//影片按鈕按下去 變換
function updateButton(e) {
    const icon = e.target.paused ? '►' : '❚ ❚';
    console.log(e.target);
    console.log(icon);
    toggle.textContent = icon;
}
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);


//快轉或是倒轉
function skip(e) {
    // console.log('skip');
    // console.log(e.target.dataset.skip);

    // currentTime 影片當前秒數
    // parseFloat(str) 將參數轉為數字
    video.currentTime += parseFloat(e.target.dataset.skip)
}
skipBtns.forEach(function (button) {
    return button.addEventListener('click', skip)
})

//聲音或是速度
function handleRangeUpdate(e) {
    console.log(this.value);
    console.log(this.name);
    // console.log(this);
    // console.log(e.target)
    // volume 返回當前音檔/影片檔的音量大小
    // playbackRate 返回當前音檔/影片檔的速度
    video[this.name] = this.value;
}//function

ranges.forEach(function (range) {
    return range.addEventListener('change', handleRangeUpdate)
})
ranges.forEach(function (range) {
    return range.addEventListener('mousemove', handleRangeUpdate)
})

//進度條
