'use client'
import { Section } from '@/components/atoms/ui'
import { ProfileSettings } from '@/components/organisms/ui'
import { useSession } from 'next-auth/react'
import { useUser } from '@/hooks/useUser'

export default function ProfilePage() {
  const { data: session } = useSession()
  const { profileData, handleChange, handleSubmit, isLoading, error } = useUser(
    {
      email: session?.user?.email,
    }
  )

  return (
    <Section>
      <ProfileSettings
        session={session}
        profileData={profileData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
      />
    </Section>
  )
}
