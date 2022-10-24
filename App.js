import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.container}>
        <ImageBackground
          source={require("./assets/images/background-image.jpg")}
          resizeMode="cover"
          style={s.background}
        >
          <View style={s.form}>
            <View>
              <Text style={s.inputLabel}>EMAIL</Text>
              <TextInput style={s.input} textAlign="center" />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={s.inputLabel}>PASSWORD</Text>
              <TextInput style={s.input} textAlign="center" secureTextEntry />
            </View>
            <TouchableOpacity style={s.btn} activeOpacity={0.7}>
              <Text style={s.btnText}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  background: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginHorizontal: 40,
  },
  inputLabel: {
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 5,
    color: "#fff",
    padding: 10,
    fontSize: 16,
  },
  btn: {
    height: 40,
    backgroundColor: "lime",
    borderRadius: 5,
    marginHorizontal: 20,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "#fff",
    fontSize: 18,
  },
});
