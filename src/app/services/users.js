export const handleUser = async ({ email }) => {
  const response = await fetch(`http://localhost:3000/api/users/${email}`)
  return response.json()
}

export const handleUsers = async () => {
  const response = await fetch('http://localhost:3000/api/users')
  return response.json()
}

export const updateApplicationStatus = async ({
  email,
  profileData,
  applicant,
}) => {
  const body = {
    ...profileData,
  }
  if (applicant === 'communityServiceApplicant') {
    body.communityServiceApplicant = true
  }
  if (applicant === 'internshipApplicant') {
    body.internshipApplicant = true
  }

  const response = await fetch(`http://localhost:3000/api/users/${email}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })

  return response
}
