import { View, Text, TouchableOpacity } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import styles from "./style/styles";

export default function Resultado() {
  const { score } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Resultado</Text>

      <Text style={styles.pergunta}>
        Você acertou {score} de 10 questões
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => router.replace("/quiz")}
      >
        <Text style={styles.textoBotao}>Reiniciar Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}