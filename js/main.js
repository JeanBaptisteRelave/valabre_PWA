const bodyDiv = document.getElementById('body_div');

function changePage(page){
    bodyDiv.innerHTML = '<object type="text/html" data="pages/' + page + '.html" ></object>';
}