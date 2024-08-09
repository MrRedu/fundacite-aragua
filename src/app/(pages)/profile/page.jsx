'use client'
import { Section } from '@/components/atoms/ui'
import { useSession } from 'next-auth/react'
import { useUser } from '@/hooks/useUser'
import { ProfileSettings } from '@/components/organisms/profile-settings/ProfileSettings'

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
