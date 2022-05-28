import './App.css';
import React, { useState } from 'react'
import AsideForm from './components/AsideForm'
import ResultContainer from './components/ResultContainer'

function App() {
  const [username, setUsername] = useState(null)
  const [userData, setUserData] = useState(null)
  const [inSearch, setInSearch] = useState(false)

  async function getUser(e) {
    e.preventDefault()
    await fetch(`https://api.github.com/users/${username}`)
      .then(data => data.json())
      .then(data => setUserData(data))
      .catch(() => window.alert(' Erro inesperado! \nVerifique sua conexão.'))

  }


  return (
    <main>
      <AsideForm inSearch={inSearch} onChange={(e) => setUsername(e.target.value)} onClick={getUser} />
      {userData ? (<ResultContainer userData={userData} />) : (null)}
    </main>
  );
}

export default App;
