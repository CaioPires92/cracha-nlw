const linksSocialMedia = {
  github: 'CaioPires92',
  youtube: 'channel/UCa4oDouX4Dd_fxwjzi6DArQ',
  instagram: 'CaioPires92',
  facebook: 'caio.pires.7106',
  twitter: 'Caiogodoi92'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLogin.textContent = data.login
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userAvatar.src = data.avatar_url
    })
}

getGitHubProfileInfos()
