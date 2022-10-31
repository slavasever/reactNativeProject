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
import { useState, useEffect, useCallback } from "react";
import * as Font from "expo-font";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [appIsReady, setAppIsReady] = useState(false);

  // !!!!!!!!!!!! Завантаження шрифтів через хук useFonts !!!!!!!!!!!!

  // const [fontsLoaded] = useFonts({
  //   "Releway-Italic": require("./assets/fonts/Raleway-Italic-VariableFont_wght.ttf"),
  //   "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
  //   "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  //   "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  //   "DM-Mono": require("./assets/fonts/DMMono-Regular.ttf"),
  //   "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
  // });

  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded) {
  //   return null;
  // }

  // !!!!!!!!!!!! Завантаження шрифтів через Font.loadAsync !!!!!!!!!!!!!!!!!!!!

  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          "Releway-Italic": require("./assets/fonts/Raleway-Italic-VariableFont_wght.ttf"),
          "Roboto-Italic": require("./assets/fonts/Roboto-Italic.ttf"),
          "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
          "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
          "DM-Mono": require("./assets/fonts/DMMono-Regular.ttf"),
          "Inter-Black": require("./assets/fonts/Inter-Black.ttf"),
          "Lobster-Regular": require("./assets/fonts/Lobster-Regular.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    Keyboard.dismiss();
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={s.container}>
        <ImageBackground
          source={require("./assets/images/background-image.jpg")}
          resizeMode="cover"
          style={s.background}
        >
          <View onLayout={onLayoutRootView}>
            <Text style={s.header}>Welcome Back!</Text>
          </View>
          <View style={s.form}>
            <View>
              <Text style={s.inputLabel}>EMAIL</Text>
              <TextInput
                style={s.input}
                textAlign="center"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={s.inputLabel}>PASSWORD</Text>
              <TextInput
                style={s.input}
                textAlign="center"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
            </View>
            <TouchableOpacity
              style={s.btn}
              activeOpacity={0.7}
              onPress={handleSubmit}
            >
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
  header: {
    color: "#fff",
    textAlign: "center",
    marginBottom: 80,
    fontSize: 30,
    fontFamily: "Lobster-Regular",
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
