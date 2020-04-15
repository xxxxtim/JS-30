//step 1
//選取所有的<input type="checkbox">
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
// console.log(checkboxes);
//設置一個變數let lastChecked;紀錄最後一個勾選
let lastChecked;

//step 2
//為每個checkbox加上click事件
checkboxes.forEach(function (checkbox) {
    return checkbox.addEventListener('click', handleCheck)
})
function handleCheck(event) {
    //let inBetween = false來當作選取區間的標記
    let inBetween = false;
    // this 指的是<input type="checkbox">
    // this.checked :判斷有無打勾 有的話回傳true
    if (event.shiftKey && this.checked) {

        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log('Starting to check them in between!');
            }
            // 勾選區間內為true的checkbox
            if (inBetween) {
                checkbox.checked = true;
            }
        });

        ////////////////////////////////////////////////////////////////
        // checkboxes.forEach(function (checkbox) {
        //     console.log(checkbox);
        //     if (checkbox === this || checkbox === lastChecked) {
        //         inBetween = !inBetween;
        //         console.log('Starting to check them in between!');
        //     }

        //     if (inBetween) {
        //         checkbox.checked = true;
        //     }
        // });
    }


}//function handleCheck