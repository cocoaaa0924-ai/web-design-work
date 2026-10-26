let hamberger = document.querySelector(".hamberger");
let nav = document.querySelector(".nav");

hamberger.addEventListener("click",function(){
    hamberger.classList.toggle("on");
    nav.classList.toggle("on");
});

document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.keito,.lead,.tsumugi_text');
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) { // 画面の80%の位置で表示
        element.classList.add('in-view');
      }
    });
  });

  // カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById('cursor'); 

// カーソル用のdivタグをマウスに追従させる
document.addEventListener('mousemove', function (e) {
    cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll('a');
for (var i = 0; i < link.length; i++) {
    link[i].addEventListener('mouseover', function (e) {
        cursor.classList.add('cursor--hover');
    });
    link[i].addEventListener('mouseout', function (e) {
        cursor.classList.remove('cursor--hover');   
    });
}