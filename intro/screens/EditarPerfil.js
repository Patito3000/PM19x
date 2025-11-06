import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Alert } from 'react-native'
import React, { useState } from 'react'
import ModalScreen from './ModalScreen';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Editarperfil() {

    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const [multexto, setMultexto] = useState('');
    const [screen, setScreen] = useState('');

   

    switch (screen){
        case 'Regresar':
            return <ModalScreen/>
        case 'menu':
            default:
                return (
        <View style={styles.cuadro}>
            <View style={styles.contenedor}>
                <View style={styles.cuadro_color}>
                    <Text style={styles.perfil}>Editar perfil</Text>
                    <Icon name="person-outline" size={24} color="#4CAF50" style={styles.icon}/>
                    <TouchableOpacity 
                        style={styles.botones} 
                        onPress={() => setScreen('Regresar')}
                    >
                        <Text style={styles.botones_texto}>Regresar a la otra pantalla</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.cuadro_color}>
                    <Text style={styles.texto}>Foto de perfil</Text>
                    <Text style={styles.respuesta}>Aqui ira una imagen</Text>
                </View>

                <View style={styles.cuadro_color}>
                    <Text style={styles.texto}>Nombre</Text>
                    <TextInput
                        style={styles.respuesta}
                        placeholder="Escribe tu nombre"
                        value={nombre}
                        onChangeText={setNombre}
                    />
                </View>

                <View style={styles.cuadro_color}>
                    <Text style={styles.texto}>Correo</Text>
                    <TextInput
                        style={styles.respuesta}
                        placeholder="Correo"
                        value={correo}
                        onChangeText={setCorreo}
                    />
                </View>

                <View style={styles.cuadro_color}>
                    <Text style={styles.texto}>Descripcion</Text>
                    <TextInput
                        style={styles.respuesta}
                        placeholder="Escribe tu descripcion"
                        value={multexto}
                        onChangeText={setMultexto}
                        multiline
                    />
                </View>
            </View>
        </View>
    )
                
    }


    
}  

const colors = {
    cuadrito: '#E7E7E7',
};

const styles = StyleSheet.create({
    cuadro: {
        backgroundColor: colors.cuadrito,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 40,
    },

    contenedor: {
        width: '85%',
    },

    perfil: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 25,
        textAlign: 'center',
    },

    texto: {
        fontSize: 15,
        fontWeight: 'bold',
        padding: 20,
    },

    cuadro_color: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginBottom: 20,
        shadowOffset: { width: 0, height: 7 },
        shadowRadius: 10,
        borderRadius: 20,
        width: '100%',
    },

    respuesta: {
        borderRadius: 10,
        marginBottom: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: '#E7E7E7',
        backgroundColor: '#fff',
        width: '100%',
        textAlign: 'left',
    },

    botones: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 10,
    },

    botones_texto: {
        backgroundColor: 'white',
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
    },

    separacion: {
        marginBottom: 20
    },

    icon: {
        marginRight: 20,
        width: 30,
        alignSelf: 'center',       
        
        
    },
})