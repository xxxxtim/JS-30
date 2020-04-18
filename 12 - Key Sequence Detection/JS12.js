const pressed = [];
const secretCode = 'abc';


//監聽輸入的鍵盤按鍵
window.addEventListener('keyup', function (e) {
    pressed.push(e.key);
    // console.log(pressed)
    //透過運算使pressed陣列長度始終與設定密碼相同，且當超出時替換掉陣列第一個元素
    //FIFO寫法1
    // console.log(secretCode.length);
    // pressed.splice((-secretCode.length) - 1, pressed.length - secretCode.length);
    // console.log(pressed)
    //FIFO寫法2
    if (pressed.length > secretCode.length) {
        pressed.shift();
    }
    //判斷輸入值陣列的內容是否與設定密碼相同
    if (pressed.join('').includes(secretCode)) {
        console.log('Perfect!');
        cornify_add();

    }
})

