module.exports = {
  name: 'alugam',
  version: '1.0.0',
  scheme: 'alugam',
  extra: {
    clerkPublishableKey: process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY,
  },
  plugins: ['expo-router'],
}
