import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";
import { Albuns, AlbunsProps } from "../../screens/Albuns";

interface CardAlbumProps {
  item: AlbunsProps
}

export const CardAlbum = ( { item } :CardAlbumProps) => {
    return <TouchableOpacity
    activeOpacity={0.7}
    style={styles.container}
  >
    <View
      style={styles.containerArtista}
    >
      <Text
        style={styles.album}
      >
        {item.titulo}
      </Text>
      <Text
        style={styles.artista}
      >
        {item.nomeArtista}
      </Text>
    </View>
    <Text
      style={styles.duracao}
    >
      {item.minutos/60> 1 && Math.floor(item.minutos/60)+"h "}{item.minutos%60 + "min"}
    </Text>
  </TouchableOpacity>
}

