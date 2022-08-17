import React from "react";
import {View, TouchableOpacity, Text} from 'react-native';
import { styles } from "./styles";
import { Albuns, AlbunsProps } from "../../screens/Albuns";
import { NavigationHelpersContext } from "@react-navigation/native";
import { StackParamList } from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

interface CardAlbumProps {
  navigate: NativeStackNavigationProp<StackParamList,"Album",undefined>,
  item: AlbunsProps,
}

export const CardAlbum = ( { item , navigate } :CardAlbumProps) => {

  console.log(item.id);
  

    return <TouchableOpacity
    activeOpacity={0.7}
    style={styles.container}
    onPress={()=> navigate.navigate("Musicas",{indexAlbum: item.id})}
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

