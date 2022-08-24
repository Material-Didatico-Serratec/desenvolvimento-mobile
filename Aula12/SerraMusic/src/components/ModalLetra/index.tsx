import React, { useContext, useEffect, useState } from "react";
import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { buscaLetra } from "../../services/api";
import { styles } from "./styles";

import IconGoBack from '../../assets/icons/goback.png';
import EstrelaVazia  from "../../assets/icons/estrelaVazia.png";
import EstrelaCheia  from "../../assets/icons/estrelaCheia.png";
import { ContextoFavorito } from "../../context/favoritos";

interface ModalLetraProps {
    visibilidadeModal: boolean,
    idAlbum: number,
    idMusica: number,
    setVisibilidadeModal: React.Dispatch<React.SetStateAction<boolean>>,
}

interface LetraProps {
    id: number,
    letra: string,
    titulo: string,
    minutos: number
}

export const ModalLetra = ({ visibilidadeModal, idAlbum, idMusica, setVisibilidadeModal }: ModalLetraProps) => {

    const [letra, setLetra] = useState<LetraProps>();
    const [favorito, setFavorito] = useState<boolean>(false);

    const { 
        adicionaItemFavoritos, 
        listaFavorita, 
        retiraItemFavoritos 
    } =  useContext(ContextoFavorito)

    useEffect(() => {
        console.log(idAlbum + " " + idMusica);
        
        buscaLetra(idAlbum, idMusica).then((res) => {
            setLetra(res.data);
        }).catch((err) => {
            console.log(err)
        });
        listaFavorita.map(musica=>{
            if(musica.id === idMusica) {
                setFavorito(true);
            }
        });
    }, [])

    function lidaFavorito() {
        if(!favorito) {
            if (!listaFavorita.find((musica)=>{
                if (musica.id === idMusica) {
                    return true
                } else {
                    return false
                }
            })) {
                letra  && adicionaItemFavoritos({id: idMusica, titulo: letra.titulo, minutos: letra.minutos, idAlbum: idAlbum})
                setFavorito(true);
            }
        } else {
            listaFavorita.find((musica)=>{
                if(musica.id === idMusica) {
                    retiraItemFavoritos(idMusica);
                    setFavorito(false);
                }
            })
        }
    }

    return <Modal
        animationType="slide"
        visible={visibilidadeModal}
        transparent={true}
        onRequestClose={() => {
            setVisibilidadeModal(false);
        }}
    >
        <View style={styles.modal}>
            {letra ? <View style={styles.container}>
                <View style={styles.tituloContainer}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => setVisibilidadeModal(false)}>
                            <Image
                                source={IconGoBack}
                                style={{ width: 15, height: 15 }}
                            />
                        </TouchableOpacity>
                        <Text style={styles.titulo}>
                            {letra.titulo}
                        </Text>
                    </View>
                    <Text style={styles.duracao}>
                        {letra.minutos / 60 > 1 && Math.floor(letra.minutos / 60) + "h "}{letra.minutos % 60 + "min"}
                    </Text>
                </View>
                <TouchableOpacity onPress={lidaFavorito} style={styles.favoritoContainer}>
                    <Text>
                        Favoritar:
                    </Text>
                    <Image source={favorito ? EstrelaCheia: EstrelaVazia} style={styles.image}/>
                </TouchableOpacity>
                <ScrollView style={{ paddingHorizontal: 5 }}>
                    <Text>
                        {letra.letra}
                    </Text>
                </ScrollView>
            </View>
                :
                <Text>
                    Carregando...
                </Text>
            }
        </View>
    </Modal>
}