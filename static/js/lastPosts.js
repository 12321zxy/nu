let btnLoadMore=document.querySelector(".lastPress__content--btn");var link=document.querySelector(".lastPress").getAttribute("url"),id_category=document.querySelector(".lastPress").getAttribute("id-category");function checkCards(){return document.querySelectorAll(".lastPress .lastPress__item").length}btnLoadMore.addEventListener("click",()=>{var e=checkCards();loadPosts(e+=3,null==id_category?"":id_category)});let cardBox=document.querySelector(".lastPress__content--group");async function loadPosts(e,t){let o=await fetch(link+"/wp-admin/admin-ajax.php?action=loadMorePress",{mode:"no-cors",method:"POST",body:new URLSearchParams({posts_page:e,id_category:t}).toString(),headers:{"Content-type":"application/x-www-form-urlencoded"}});e=await o.text();cardBox.innerHTML=e}function loadMore_ajax(){var e=checkCards();loadPosts(e+=3)}