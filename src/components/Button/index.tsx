import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

type ButtonProps = {
  width: number
  theme: 'dark' | 'light'
  text: string
  margin?: number
  fontFamily: string
  onPress: () => void
}
export default function Button({
  width,
  theme,
  text,
  margin,
  fontFamily,
  onPress,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          width: width,
          margin: margin,
          backgroundColor: theme == 'dark' ? '#457495' : '#FFFFFF',
          borderColor: theme === 'light' && '#457495',
          borderWidth: theme === 'light' ? 1 : 0,
        },
      ]}
      onPress={onPress}
    >
      <Text
        style={{
          color: theme === 'dark' ? '#FFFFFF' : '#457495',
          fontFamily: fontFamily,
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}
