import { TextInput, TouchableOpacity, View } from 'react-native'
import styles from './styles'
import User from '@expo/vector-icons/FontAwesome5'
import Eye from '@expo/vector-icons/Feather'

type InputProps = {
  iconType: 'user' | 'lock'
  onChangeText: (value: string) => void
  marginTop: number
  isPassword?: boolean
  visiblePassword?: boolean
  setVisiblePassword?: () => void
}
export default function Input({
  iconType,
  onChangeText,
  marginTop,
  isPassword,
  visiblePassword,
  setVisiblePassword,
}: InputProps) {
  return (
    <View style={[styles.textField, { marginTop: marginTop }]}>
      <User
        name={iconType == 'user' ? 'user-alt' : 'lock'}
        size={16}
        color={'#457495'}
      />
      <TextInput
        style={{ marginLeft: 6, width: 185 }}
        placeholder={iconType === 'user' ? 'Usuário' : 'Senha'}
        placeholderTextColor={'#808080'}
        onChangeText={onChangeText}
        secureTextEntry={visiblePassword}
      ></TextInput>
      {isPassword && (
        <TouchableOpacity onPress={setVisiblePassword}>
          <Eye name={!visiblePassword ? 'eye' : 'eye-off'} size={16} />
        </TouchableOpacity>
      )}
    </View>
  )
}
