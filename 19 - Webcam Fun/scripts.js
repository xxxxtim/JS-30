const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
function getVideo() {
    // 取得user的視訊裝置，回傳Promise狀態
    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })
        // 如果允許則把回傳的MediaStream寫進html的video tag中並播放
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        // 當失敗時印出錯誤結果
        .catch(err => {
            console.error(`ERROR: `, err);
        })
}//getVideo

function paintToCanavas() {
    // 設置寬高
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width, height);
    canvas.width = width;
    canvas.height = height;
    // 用setInterval來持續取得目前的影像資訊
    return setInterval(() => {
        // 在canvas中設置內容來源與video相同，並且X、Ｙ軸及長寬與video相同
        //context.drawImage(img,x,y,width,height);
        ctx.drawImage(video, 0, 0, width, height);

        // 透過getImageData取得當前canvans中所有的像素點(r,g,b,alpha的資訊)
        let pixels = ctx.getImageData(0, 0, width, height);
        // 製作效果
        pixels = redEffect(pixels); // 紅色濾鏡效果
        // 置入效果
        ctx.putImageData(pixels, 0, 0);
    }, 16)

}

function takePhoto() {
    // 拍照的音效->把音效切到第0秒並播放
    snap.currentTime = 0;
    snap.play();
    // 利用toDataURL把canvas的內容轉為base64的圖檔資訊
    const data = canvas.toDataURL('image/jpeg');
    console.log(data);
    // 用createElemamnt來建立一個新的a元素
    const link = document.createElement('a');
    // 設置連結位置為轉圖檔後的base64位置
    link.href = data;
    // 設置連結為下載
    link.setAttribute('download', 'photo');
    link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
    strip.insertBefore(link, strip.firstChild);
}//takePhoto

function redEffect(pixels) {
    // 透過迴圈將取回的所有像素資料跑一次，i +=4 是因為四個一組(r,g,b,alpha）
    for (let i = 0; i < pixels.data.length; i += 4) {
        // 下面組合就是單純把R(紅色)增強達到紅色濾鏡的效果
        // pixels.data[i + 0] = pixels.data[i + 0] + 100;
        // pixels.data[i + 1] = pixels.data[i + 1] - 50;
        // pixels.data[i + 2] = pixels.data[i + 2] * 0.5;

        let R = pixels.data[i + 0];
        let G = pixels.data[i + 1];
        let B = pixels.data[i + 2];
        let gr = (R * 38 + G * 75 + B * 15) >> 7;
        if (gr > 100) {
            gr = 255;
        }
        else {
            gr = 0;
        }
        pixels.data[i + 0] = gr;
        pixels.data[i + 1] = gr;
        pixels.data[i + 2] = gr;
    }
    return pixels;
}//redEffect
getVideo();
video.addEventListener('canplay', paintToCanavas)
