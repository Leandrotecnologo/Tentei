import { View } from "react-native";
import { Text } from "react-native-paper";
import { styles } from "../utils/styles";


export default function HomeScreen(){
    return(
        <View style={styles.container}>
            <Text>Seja Bem vindo!</Text>
        </View>
    )
}