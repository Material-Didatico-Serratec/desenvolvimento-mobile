import React from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

interface ModalLetraProps {
    visibilidadeModal: boolean,
    idAlbum: number,
    idMusica: number,
    setVisibilidadeModal: React.Dispatch<React.SetStateAction<boolean>>,
}

export const ModalLetra = ({visibilidadeModal, idAlbum, idMusica, setVisibilidadeModal}:ModalLetraProps) => {


    console.log(idAlbum + ' ' + idMusica);

    return <Modal
        visible={visibilidadeModal}
    >
        <View>
            <TouchableOpacity onPress={()=>setVisibilidadeModal(false)}>

                <Text>
                    Fred
                </Text>
            </TouchableOpacity>
        </View>
    </Modal>
}