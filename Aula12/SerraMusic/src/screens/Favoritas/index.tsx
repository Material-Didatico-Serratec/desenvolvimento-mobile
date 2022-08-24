import React, { useContext, useState } from "react";
import { View, FlatList, Text } from "react-native";
import { CardMusica } from "../../components/CardMusica";
import { ModalLetra } from "../../components/ModalLetra";
import { ContextoFavorito } from "../../context/favoritos";
import { styles } from "./styles";



export function Favoritas() {

    const listaFavoritas = useContext(ContextoFavorito).listaFavorita;
    const [visibilidadeModal, setVisibilidadeModal] = useState<boolean>(false);
    const [idMusica, setIdMusica] = useState<number>(0);
    const [idAlbum, setIdAlbum] = useState<number>(0);

    return <View style={styles.container}>
        <Text style={styles.titulo}>
            Favoritas:
        </Text>
        <FlatList
            data={listaFavoritas}
            renderItem={({item})=>{
                return <CardMusica setIdAlbum={setIdAlbum} setIdMusica={setIdMusica} setVisibilidadeModal={setVisibilidadeModal} item={item}/>
            }}
        />
        {visibilidadeModal && <ModalLetra
            idAlbum={idAlbum}
            idMusica={idMusica}
            setVisibilidadeModal={setVisibilidadeModal}
            visibilidadeModal={visibilidadeModal}
        />}

    </View>
}