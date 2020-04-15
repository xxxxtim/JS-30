//step 1
//選取所有的<input type="checkbox">
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);
//設置一個變數let lastChecked;紀錄最後一個勾選
let lastCheck;

//step 2
//為每個checkbox加上click事件
checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('click', handleCheck)
})
function handleCheck(event) {

    // this 指的是<input type="checkbox">
    // this.checked :判斷有無打勾 有的話回傳true
    if (event.shiftKey && this.checked) { }


}//function handleCheck