import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";

export default function LoginInstagram() {
  const [user, setUser] = useState(" ");
  const [password, setPassword] = useState(" ");
  return (
    <ImageBackground
      source={{
        uri: "https://static.vecteezy.com/system/resources/previews/002/486/289/original/gradient-background-instagram-free-vector.jpg",
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Instagram</Text>
      <TextInput
        placeholder="Usuário"
        style={styles.input}
        onChangeText={setUser}
      ></TextInput>
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setPassword}
      ></TextInput>
      <TouchableOpacity
        style={styles.btnEntrar}
        onPress={() => {
          alert(`Usuário: ${user}, Senha: ${password}`);
        }}
      >
        <Text style={styles.textBtnEntrar}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.viewRecovey}>
        <Text style={styles.textRecovey}>Esqueceu seus dados de login?</Text>
        <TouchableOpacity>
          <Text style={styles.btnTextRecovey}>Obtenha ajuda para entrar.</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.oU}>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.textOu}>OU</Text>
        <View style={styles.horizontalLine}></View>
      </View>
      <TouchableOpacity style={styles.btnFacebook}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/747/747543.png",
          }}
          style={styles.logoFacebook}
        ></Image>
        <Text style={styles.textFacebook}>Entrar com Facebook</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 50,
  },
  input: {
    height: 50,
    width: "90%",
    textAlign: "left",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
    color: "#fff",
  },
  btnEntrar: {
    height: 50,
    width: "90%",
    padding: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.4)",
    borderRadius: 5,
    marginVertical: 10,
  },
  textBtnEntrar: {
    color: "#fff",
    textAlign: "center",
    fontSize: 25,
  },
  viewRecovey: {
    flexDirection: "row",
    width: "80%",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 20,
  },
  textRecovey: {
    color: "rgba(255, 255, 255, 0.6)",
  },
  btnTextRecovey: {
    color: "rgba(255, 255, 255, 1)",
  },
  horizontalLine: {
    width: "40%",
    height: 1,
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    marginHorizontal: 8,
  },
  oU: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    height: 20,
    marginVertical: 20,
  },
  textOu: {
    fontWeight: "bold",
    color: "#fff",
  },
  btnFacebook: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  logoFacebook: {
    height: 30,
    width: 30,
    marginHorizontal: 10,
  },
  textFacebook: {
    fontSize: 20,
    color: "#fff",
  },
});
