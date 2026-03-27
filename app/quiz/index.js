import { View, Text, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import styles from "./style/styles";

export const handle = { title: "Quiz" };

export default function HomeQuiz() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Escolha um Quiz</Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/quiz/sociologia")}
      >
        <Text style={styles.textoBotao}>Sociologia</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.push("/quiz/filosofia")}
      >
        <Text style={styles.textoBotao}>Filosofia</Text>
      </TouchableOpacity>
    </View>
  );
}