import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { CardAlbum } from '../../components/CardAlbum';
import { StackParamList } from "../../routes/routes";
import { buscaAlbuns } from "../../services/api";

type MusicaScreenProps = NativeStackScreenProps<StackParamList,'Musicas'>;

export function Musicas({route, navigation}: MusicaScreenProps) {

    console.log(route.params.indexAlbum);
    
    return <View>

    </View>
}