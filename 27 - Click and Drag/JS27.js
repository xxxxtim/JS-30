const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;//滾動條


/** 滑鼠按鍵按下 **/
slider.addEventListener('mousedown', (e) => {
    console.log(this)
    // console.log(e.target)
    // console.log(e.currentTarget)
    isDown = true;
    slider.classList.add('active');

    // 設定移動的初始值為目前頁面距離-當前item左邊距
    startX = e.pageX - slider.offsetLeft;
    // 設定目前捲軸的左距
    scrollLeft = slider.scrollLeft;
    // console.log(startX)

});

/** 滑鼠滑出範圍**/
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');

});

/** 滑鼠按鍵放開 **/
slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');

});

/** 滑鼠移動 **/
slider.addEventListener('mousemove', (e) => {
    // 若移動時的狀態非按下，不作動
    if (!isDown) return;
    // 避免觸發其他預設事件（按下且移動預設是選取範圍）
    e.preventDefault();
    // 設定X（當前定位）為目前頁面距離-當前item左邊距
    const x = e.pageX - slider.offsetLeft;
    // 設定移動距離為 X-初始值
    const walk = (x - startX) * 3;
    // 設定水平捲軸的偏移量
    slider.scrollLeft = scrollLeft - walk;
});