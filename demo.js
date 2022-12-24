window.onload = function () {
    let users = document.createElement('h1');
    let bgg = document.querySelector('.ones');
    let tree = document.querySelector('.twos');
    let toys = document.querySelector('.thirds');
    let audio = document.getElementById('audio')
    let body = document.body
    body.onclick = function () {
        audio.play()
    }
    bgg.classList.add('bgg');
    tree.classList.add('tree');
    toys.classList.add('toys');
    users.innerHTML = '@Yeming';
    users.classList.add('user_name');
    document.body.appendChild(users);
}