import { router } from "expo-router";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { quizzes } from "./data";
import styles from "./style/styles";

export default function Sociologia() {
  const perguntas = quizzes?.sociologia || [];

  const [indice, setIndice] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const [respostaSelecionada, setRespostaSelecionada] = useState(null);
  const [mostrarResposta, setMostrarResposta] = useState(false);

  const responder = (index) => {
    setRespostaSelecionada(index);
    setMostrarResposta(true);

    if (index === perguntas[indice].resposta) {
      setPontuacao((prev) => prev + 1);
    }
  };

  const proxima = () => {
    setMostrarResposta(false);
    setRespostaSelecionada(null);

    if (indice + 1 < perguntas.length) {
      setIndice((prev) => prev + 1);
    } else {
      router.push({
        pathname: "/quiz/resultado",
        params: {
          score: pontuacao,
          total: perguntas.length,
        },
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{perguntas[indice]?.pergunta}</Text>

      {perguntas[indice]?.opcoes.map((opcao, i) => {
        const correta = perguntas[indice].resposta === i;

        return (
          <TouchableOpacity
            key={i}
            style={[
              styles.botao,
              mostrarResposta &&
                (correta
                  ? { backgroundColor: "green" }
                  : i === respostaSelecionada
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
