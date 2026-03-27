import { View, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import styles from "./style/styles";
import { quizzes } from "./data";

export default function Filosofia() {
  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelec, setResp] = useState(null);
  const [mostrarResposta, setMostrar] = useState(false);

  const perguntas = quizzes.filosofia;

  const responder = (index) => {
    setResp(index);
    setMostrar(true);

    if (index === perguntas[indice].resposta) {
      setPontuacao(pontuacao + 1);
    }
  };

  const proxima = () => {
    setMostrar(false);
    setResp(null);

    if (indice + 1 < perguntas.length) {
      setIndice(indice + 1);
    } else {
      router.push({
        pathname: "/quiz/resultado",
        params: { score: pontuacao },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{perguntas[indice].pergunta}</Text>

      {perguntas[indice].opcoes.map((opcao, i) => {
        const correta = perguntas[indice].resposta === i;

        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.botao,
              mostrarResposta &&
                (correta
                  ? { backgroundColor: "green" }
                  : i === respostaSelec
                  ? { backgroundColor: "red" }
                  : null),
            ]}
            onPress={() => !mostrarResposta && responder(i)}
          >
            <Text style={styles.textoBotao}>{opcao}</Text>
          </TouchableOpacity>
        );
      })}

      {mostrarResposta && (
        <TouchableOpacity style={styles.botao} onPress={proxima}>
          <Text style={styles.textoBotao}>Próxima</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}