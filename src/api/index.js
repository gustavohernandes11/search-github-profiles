export async function getProfile(username) {
    const url = `https://api.github.com/users/${username}`
    const data =  await fetch(url)
        .then(data => data.json())
        return data 
  }

export async function getUserRepos(repos_url) {
    const data = await fetch(repos_url)
        .then(data => data.json())
        return data
}
