import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import CircleTop from '../images/Ellipse 1.svg'
import CircleBottom from '../images/Ellipse 2.svg'
import Input from '../components/Input'
import { useState } from 'react'
import Button from '../components/Button'
import { Checkbox } from 'react-native-paper'
import {
  useFonts,
  Mada_400Regular,
  Mada_500Medium,
  Mada_700Bold,
} from '@expo-google-fonts/mada'
import { useSignIn } from '@clerk/clerk-expo'
import { router } from 'expo-router'
export default function LoginPage() {
  const { signIn, setActive, isLoaded } = useSignIn()

  const [textUser, setTextUser] = useState('')
  const [password, setPassword] = useState('')
  const [visiblePassword, setVisiblePassword] = useState(false)
  const [checked, setChecked] = useState(false)
  const [fontsLoaded] = useFonts({
    Mada_400Regular,
    Mada_500Medium,
    Mada_700Bold,
  })
  if (!fontsLoaded) {
    return null
  }
  const onSignInPress = async () => {
    if (!isLoaded) {
      return
    }

    try {
      const completeSignIn = await signIn.create({
        identifier: textUser,
        password,
      })
      // This is an important step,
      // This indicates the user is signed in
      await setActive({ session: completeSignIn.createdSessionId })
      router.replace('/homePage')
    } catch (err: any) {
      console.log(err)
    }
  }
  const onCreateAccount = () => {
    return console.log('teste')
  }
  return (
    <View style={styles.home}>
      <View>
        <CircleTop width={500} height={240} />
      </View>
      <Text style={[styles.loginText, { fontFamily: 'Mada_700Bold' }]}>
        Log in
      </Text>
      <Input
        iconType={'user'}
        onChangeText={(value) => setTextUser(value)}
        marginTop={25}
      />
      <Input
        iconType={'lock'}
        onChangeText={(value) => setPassword(value)}
        marginTop={25}
        isPassword
        visiblePassword={visiblePassword}
        setVisiblePassword={() => setVisiblePassword(!visiblePassword)}
      />
      <View style={styles.marksButton}>
        <View style={styles.marksAlignButton}>
          <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
            color="#457495"
          />
          <Text style={{ color: '#457495', fontFamily: 'Mada_500Medium' }}>
            Lembrar-me
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={[styles.forgetPassword, { fontFamily: 'Mada_500Medium' }]}
          >
            Esqueci a senha
          </Text>
        </TouchableOpacity>
      </View>
      <Button
        width={101}
        theme={'dark'}
        text={'Entrar'}
        margin={16}
        fontFamily={'Mada_700Bold'}
        onPress={onSignInPress}
      />
      <Button
        width={180}
        theme={'light'}
        text={'Criar uma conta'}
        fontFamily={'Mada_700Bold'}
        onPress={onCreateAccount}
      />
      <CircleBottom style={{ alignSelf: 'flex-end' }} height={340} />
    </View>
  )
}
