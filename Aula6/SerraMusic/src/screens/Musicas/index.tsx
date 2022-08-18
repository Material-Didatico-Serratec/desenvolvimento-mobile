import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View, } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CardMusica } from "../../components/CardMusica";
import { StackParamList } from "../../routes/routes";
import { buscaDetalhesAlbum } from "../../services/api";
import { styles } from "./styles";

import GoBackIcon from '../../assets/icons/goback.png'

type MusicaScreenProps = NativeStackScreenProps<StackParamList,'Musicas'>;

interface DetalhesAlbumProps {
    id: number, 
    idArtista: number, 
    musicas: MusicaProps[],
    nomeArtista: string, 
    titulo: string,
}

export interface MusicaProps {
    id: number, 
    idArtista: number, 
    minutos: number, 
    nomeArtista: string,
    titulo: string,
    idAlbum?: number
}


export function Musicas({route, navigation}: MusicaScreenProps) {

    const [album,setAlbum] = useState<DetalhesAlbumProps>();

    useEffect(()=>{
        buscaDetalhesAlbum(route.params.indexAlbum).then((res)=>{
            setAlbum(() =>{
                let albumTemporario : DetalhesAlbumProps = res.data

                albumTemporario.musicas.map((musica)=>{
                    musica.idAlbum = albumTemporario.id
                });

                return albumTemporario
            })
        }).catch((err)=>{
            console.log(err)
        })
    },[])
    
    return <View style={styles.container}>
        {album ? <>
            <View style={styles.containerTitulo}>
                <View style={styles.containerIconTitulo}>
                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <Image source={GoBackIcon} style={{width: 20, height: 20}} />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>
                        {album.titulo}
                    </Text>
                </View>
                <Text style={styles.artista}>
                    {album.nomeArtista}
                </Text>
            </View>
            <FlatList
                data={album.musicas}
                renderItem={({item})=>{
                    return <CardMusica item={item} navigate={navigation}/>
                }}
            />
        </> : <Text style={styles.titulo}>Carregando...</Text>}

    </View>
}