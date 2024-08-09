import { Section } from '@/components/atoms/ui'
import { User } from '@/components/molecules/ui'
import { handleUsers } from '@/services/users'

export default async function UsersPage() {
  const { data } = await handleUsers()

  return (
    <Section>
      <h2>{`</UsersPage>`}</h2>
      <User />
      {data.map((user, index) => (
        <>
          <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 flex gap-2 mb-2">
            <span key={index + 1}>{user.names_user}</span>
            <span key={index + 1}>{user.lastnames_user}</span>
            <span key={index + 1}>{user.email_user}</span>
            <span key={index + 1}>{user.password_user}</span>
            <span key={index + 1}>
              PASANTÍA: {user.internship_applicant_user}
            </span>
            <span key={index + 1}>
              SERVICIO:
              {user.community_service_applicant_user}
            </span>
          </div>
        </>
      ))}
    </Section>
  )
}
