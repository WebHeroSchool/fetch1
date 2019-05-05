var params = new URLSearchParams(window.location.search);
var userName = params.get(`username`);
  if(params.has(`username`) && userName !== ``) {
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(json => {
        if (json.message == 'Not Found') {
          let div = document.createElement('div');
          div.innerHTML =  'Информация о пользователе отсутствует';
          document.body.appendChild(div);
          div.style.fontSize = "30px";
        } else {
            let nickName = document.createElement('a');
            nickName.setAttribute('href', json.html_url);
            nickName.innerHTML = json.name;
            document.body.appendChild(nickName);
            nickName.style.fontSize = "40px";

            let userInfo = document.createElement('div');
            userInfo.innerHTML = json.bio;
            document.body.appendChild(userInfo);

            let avatar = document.createElement('img');
            avatar.setAttribute('src', json.avatar_url);
            document.body.appendChild(avatar);
        }
      })
  } else {
      let div = document.createElement('div');
      div.innerHTML = 'Введите данные в URL';
      document.body.appendChild(div);
      div.style.fontSize = "40px";
  }
