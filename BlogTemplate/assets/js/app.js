const btnCarregarMais = document.getElementById("carregarmais");
const inserirPosts = document.querySelector("#inserirNovosPost");

const getGitHubInfo = function () {
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io' + "/user/1/posts";
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let postageminserida = JSON.parse(this.responseText);
            console.log(postageminserida)
            CriarEstrutura(postageminserida);
        }
    };
    ajax.open('GET', url, true);
    ajax.send();
};
const dadosAutor = function(){
    var url = 'https://6388fbf0a4bb27a7f796c4f7.mockapi.io' + "/user/1";
    var ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let dadosAutor2 = JSON.parse(this.responseText);
        }
    };
    ajax.open('GET', url, true);
    ajax.send();
};




btnCarregarMais.onclick = function(e) {
    e.preventDefault()
    //const retornoGit = getGitHubInfo(buscarGit);
    alert("botão ok");
    getGitHubInfo();
}
const CriarEstrutura = function(postageminserida){

    let autor = dadosAutor();
    console.log(autor);

    let tamanho = parseInt(postageminserida.length, 10);
    let cont = 0;
    alert(tamanho);
    const estruturaDiv = document.createElement("div");

    while (cont <= tamanho) {
    estruturaDiv.innerHTML = `
        <header>
          <h2><a href="#">${postageminserida[0].titlePost}</a></h2>
          <p>${postageminserida[0].captionPost}</p>
        </header>
        <div class="info">
          <span class="date"><span class="month">Dez</span> <span class="day">01</span><span class="year">,
              2022</span></span>
          <ul class="stats">
            <li><a href="#" class="icon fa-comment">${postageminserida[0].countComments}</a></li>
            <li><a href="#" class="icon fa-heart">${postageminserida[0].countLikes}</a></li>
            <li><a href="#" class="icon brands fa-twitter">${postageminserida[0].countTwitter}</a></li>
            <li><a href="#" class="icon brands fa-facebook-f">${postageminserida[0].countFacebook}</a></li>
          </ul>
        </div>
        <a href="#" class="image featured"><img src="${postageminserida[0].imagePost}" alt="" /></a>
        <p>
        ${postageminserida[0].textPost}
        </p>
        <p class="author-avatar">
          <strong>Create by</strong>
          @ DO AUTOR, PEGAR NA FUNÇÃO dadosAutor()
          <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/235.jpg" />
        </p>

    `;
    //======================
    cont++;
    }
    inserirPosts.prepend(estruturaDiv);
        
}
