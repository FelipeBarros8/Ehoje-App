import { StatusBar } from 'expo-status-bar';
import Input from '../Components/Input'
import Button from '../Components/Button'
import { StyleSheet, Text, View,SafeAreaView,TouchableOpacity} from 'react-native';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.containerWrapper}>
      <View style={styles.containerInput}>
        <Input name="Email" type="text" placeholder="Email" />
      </View>
      <View style={styles.containerInput}>
        <Input name="CPF" type="text" placeholder="CPF" />
      </View>
      <View style={styles.containerInput}>
        <Input name="Password" type="password" placeholder="Senha" />
      </View>

      <View style={styles.containerButton}>
        <Button title="Cadastrar-se" onPress={()=>alert('se cadastrou')} />
      </View>

      <TouchableOpacity style={styles.containerResetPassword} onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.containerResetPasswordLinkContentText}>Esqueceu sua senha?</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerWrapper: {
    flex: 1,
    width: '100%',
  },
  containerInput:{
    paddingTop: 18,
  },
  containerButton:{
    paddingTop: 18,
    width: '100%',
  },
});
