// 取得nav元素
const nav = document.querySelector('#main');
// 透過offsetTop取得nav頂部到整個page的頂部距離
const topOfNav = nav.offsetTop;

window.addEventListener('scroll', fixNav);

function fixNav() {
    // console.log(topOfNav)
    // 如果目前捲軸的高度高過於nav的頂部
    if (window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
        /* 設定一個padding-top並增加fixed-nav
        因為當position被設定為fixed時，將不會再佔據原有的高度
        所以要動態的增加一個offsetHeight來將內容部位增高避免怪異的彈跳遮擋現象  */
        document.body.style.paddingTop = nav.offsetHeight + 'px';
    }
    else {
        document.body.classList.remove('fixed-nav');
        // 還原padding-top並移除fixed-nav
        document.body.style.paddingTop = 0
    }
}