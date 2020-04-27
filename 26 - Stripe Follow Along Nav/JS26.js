// 頁面元素取得
//選取到 cool 底下的所有li
const triggers = document.querySelectorAll('.cool > li');
// console.log(triggers)
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

// 滑鼠移入事件
function handleEnter(e) {
    // console.log('enter')
    // 替觸發的li加上一個class作為標示已移入
    e.target.classList.add('trigger-enter');
    setTimeout(function () {
        // console.log(this)
        // console.log(e.currentTarget)
        // 當移入時，先檢查是否有trigger-enter這個className
        // 若有的話在150毫秒後新增trigger-enter-active這個class
        return (e.target.classList.contains('trigger-enter')) && (e.target.classList.add('trigger-enter-active'));
    }, 150)
    // 新增open這個class
    background.classList.add('open');
    // 取得滑入元素底下的dropdown
    const dropdown = e.target.querySelector('.dropdown');
    // console.log(dropdown)

    // 取得這個dropdown的定位與大小資訊
    const dropdownCoords = dropdown.getBoundingClientRect();

    // 取得nav的定位與大小資訊
    const navCoords = nav.getBoundingClientRect();

    // 設定將要給白色滑動背景使用的定位與大小資訊
    const coords =
    {
        height: dropdownCoords.height,
        width: dropdownCoords.width,

        // 要減去nav的定位，避免上方區塊增加時造成的錯位
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    // 設定白色滑動背景的定位與大小
    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);

    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// 滑鼠移出事件
function handleLeave(e) {
    // console.log(e.target)
    e.target.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

// 為每個選單加上滑鼠移入/移出事件監聽
triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));