export const handleUser = async ({ email }) => {
  const response = await fetch(`http://localhost:3000/api/users/${email}`)
  return response.json()
}

export const handleUsers = async () => {
  const response = await fetch('http://localhost:3000/api/users')
  return response.json()
}
