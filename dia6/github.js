async function usuarioGitHub(){
    const response = await fetch('https://api.github.com/users/jangel-x');
    const data = await response.json();

    const avatar = document.getElementById('avatar');
    const nombre = document.getElementById('github_nombre');
    const repositorios = document.getElementById('repositorios');

    avatar.src = data.avatar_url;
    nombre.textContent = data.name || data.login;

    const reposResponse = await fetch(data.repos_url);
    const reposData = await reposResponse.json();

    reposData.forEach(repo => {
        const li = document.createElement('li');
        li.textContent = repo.name;
        repositorios.appendChild(li);
    });
}

usuarioGitHub();