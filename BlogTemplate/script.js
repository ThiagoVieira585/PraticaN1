
const botao = document.querySelector("#carregar")
var cont =1;

let post = document.querySelector(".box post post-excerpt #post");
let avatar = document.querySelector(".box post post-excerpt .author-avatar img");
let usuario = document.querySelector("#usuario");
let imagepost = document.querySelector("#back");

const getPost = function (post) {
    for(cont=1; cont<5;cont++){
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io/user/'+cont+'/posts';
    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            
            let ajax = JSON.parse(this.responseText);
            usuario.innerText = ajax.name
            imagepost.innerHTML = ajax.imagePost;
            post.innerText = ajax.textPost;
            avatar.src = ajax.avatar;
            imagepost.src = ajax.imagePost;
            console.log(ajax);
            }}


    ;

    ajax.open('GET', url, true);
    ajax.send();
}}


const funcao = function(e){
    e.preventDefault()
    getPost(usuario.value)
}

botao.addEventListener("click", funcao)