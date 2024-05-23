import accountApiRequest from '@/apiRequests/account'
import { cookies } from 'next/headers'
import ProfileForm from './profile-form'

export default async function MeProfile() {
  const cookieStore = cookies()
  const sessionToken = cookieStore.get('sessionToken')
  console.log(sessionToken?.value)
  // Vì dùng cookie nên api này không được catched trên server
  const result = await accountApiRequest.me(sessionToken?.value || '')
  return (
    <div>
      <h1>Profile</h1>
      <div>Xin chào {result.payload.data.name}</div>
      <ProfileForm profile={result.payload.data} />
    </div>
  )
}