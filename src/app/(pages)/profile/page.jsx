'use client'
import { Section } from '@/components/atoms/ui'
import { useSession } from 'next-auth/react'
import { useUser } from '@/hooks/useUser'
import { ProfileSettings } from '@/components/organisms/profile-settings/ProfileSettings'
import { usePostulation } from '@/hooks/usePostulation'

export default function ProfilePage() {
  const { data: session } = useSession()
  const { profileData, handleChange, handleSubmit, isLoading, error } = useUser(
    {
      email: session?.user?.email,
    }
  )
  const {
    sendToCommunityService,
    sendToInternshipService,
    isLoading: isLoadingPostulation,
  } = usePostulation({
    email: session?.user?.email,
  })

  return (
    <Section>
      <ProfileSettings
        session={session}
        profileData={profileData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        sendToCommunityService={sendToCommunityService}
        isLoadingPostulation={isLoadingPostulation}
        sendToInternshipService={sendToInternshipService}
      />
    </Section>
  )
}
