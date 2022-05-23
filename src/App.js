import './App.css';
import React, { useState } from 'react'
import AsideForm from './components/AsideForm'
import ResultContainer from './components/ResultContainer'

function App() {
  const [username, setUsername] = useState(null)
  const [userData, setUserData] = useState(null)

  async function getUser(e) {
    e.preventDefault()
    fetch(`https://api.github.com/users/${username}`)
      .then(data => data.json())
      .then(data => setUserData(data))
      .catch(() => window.alert(' Erro inesperado! \nVerifique sua conexão.'))

    await getUserRepos()
    console.log(userData)
  }


  function getUserRepos() {
    fetch(userData.repos_url)
      .then(data => data.json())
      .then(repos => {
        let reposArray = []
        repos.forEach(item => {
          reposArray.push(item)
        });
        setUserData(() => userData.repos = reposArray)
      })


  }

  return (
    <main>
      <AsideForm onChange={(e) => setUsername(e.target.value)} onClick={getUser} />
      {userData ? (<ResultContainer userData={userData} />) : (null)}
    </main>
  );
}

export default App;
