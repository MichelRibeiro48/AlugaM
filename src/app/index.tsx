import { ClerkProvider } from '@clerk/clerk-expo'
import LoginPage from './loginPage'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar'

export default function FirstPage() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}
    >
      <StatusBar backgroundColor="blue" />
      <LoginPage />
    </ClerkProvider>
  )
}
