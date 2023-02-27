import { Image, View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";

export default function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate("MBTNav");
  }, 2000);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.imgLogo}
      ></Image>
      <Text>App Uber Revolucionário</Text>
    </View>
  );
}
