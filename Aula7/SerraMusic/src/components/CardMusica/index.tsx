import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from "./styles";

import { StackParamList } from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { MusicaProps } from "../../screens/Musicas";

interface CardMusicaProps {
  navigate: NativeStackNavigationProp<StackParamList, "Musicas", undefined>,
  item: MusicaProps,
  setIdMusica: React.Dispatch<React.SetStateAction<number>>,
  setIdAlbum: React.Dispatch<React.SetStateAction<number>>,
  setVisibilidadeModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export const CardMusica = ({ item, setIdAlbum, setIdMusica, setVisibilidadeModal }: CardMusicaProps) => {

  function handleSelecionaMusica () {
    setVisibilidadeModal(true);
    setIdAlbum(item.idAlbum);
    setIdMusica(item.id);
  }

  return <TouchableOpacity
    activeOpacity={0.7}
    style={styles.container}
    onPress={() => handleSelecionaMusica()}
  >
      <Text
        style={styles.album}
      >
        {item.titulo}
      </Text>
    <Text
      style={styles.duracao}
    >
      {item.minutos / 60 > 1 && Math.floor(item.minutos / 60) + "h "}{item.minutos % 60 + "min"}
    </Text>
  </TouchableOpacity>
}

