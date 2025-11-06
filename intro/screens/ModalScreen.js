import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import EditarPerfil from './EditarPerfil';
import SeguridadScreen from './SeguridadScreen';
import ConfiguracionScreen from './ConfiguracionScreen';
import SoporteScreen from './SoporteScreen';
//import PerfilTarjetas from './PerfilTarjetas';

import EditarCon from './EditarCon';


//import { Modal } from 'react-native/types_generated/index';

//View funciona como div aqui
//No hacer el de presupuesto
//ShadowRadius como tal el que da difuminacion a la sombra
//Margin bottom da la separacion de los botones

//Pressable y touchableOpacity son otra manera de poner botones
//Pressable es el mas poderoso

//Falta imagen


export default function ModalScreenPrueba() {
  const [screen, setScreen] = useState('menu');

  switch(screen){
    case 'Editar':
      return <EditarPerfil/>
    case 'Seguridad':
      return <SeguridadScreen/>
    case 'Configuracion':
      return <ConfiguracionScreen/>
    case 'Soporte':
      return <SoporteScreen/>
    case 'Tarjeta':
      return <EditarCon/>
    
    case 'menu':
        default:
            return (
              <View style={styles.cuerpo}>
                <View style={styles.cuadro}>
                  <Text style={styles.texto}>Mi Perfil</Text>
                  <Icon name="person-outline" size={24} color="#4CAF50" style={styles.icon}/>
                  <Text style={styles.texto}>Danna Amador</Text>
                  <Text>Correo de ejemplo</Text>
                </View>

                <View style={styles.cuadro}>
                  <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones} onPress={() => setScreen('Editar') }>
                        <Icon name="person" size={24} color="#4CAF50" style={styles.icon}/>
                        <Text style={styles.botones_texto}>Editar perfil</Text>
                    </TouchableOpacity>
                  </View>

                  <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones}  onPress={() => setScreen('Seguridad') }>
                        <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" style={styles.icon} />
                        <Text style={styles.botones_texto}>Seguridad y privacidad</Text>
                    </TouchableOpacity>
                    </View>        
                  </View>

                          

                 <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones} onPress={() => setScreen('Tarjeta')}>
                        <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" style={styles.icon} />
                        <Text style={styles.botones_texto}>Tarjetas y bancos</Text>
                    </TouchableOpacity>
                    </View>        

                    
                  </View>
             
            
                  </View>
            
                </View>

                <View style={styles.cuadro}>
                  <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones} onPress={() => setScreen('Configuracion') }>
                        <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" style={styles.icon} />
                        <Text style={styles.botones_texto}>Configuracion de la App</Text>
                    </TouchableOpacity>
                    </View>        
                  </View>

                  <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones}>
                        <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" style={styles.icon} />
                        <Text style={styles.botones_texto}>Notificaciones</Text>
                    </TouchableOpacity>
                    </View>        
                  </View>

                  <View>
                    <View style={styles.separacion}>
                    <TouchableOpacity style={styles.botones} onPress={() => setScreen('Soporte')}>
                        <Icon name="shield-checkmark-outline" size={24} color="#4CAF50" style={styles.icon} />
                        <Text style={styles.botones_texto}>Soporte y ayuda</Text>
                    </TouchableOpacity>
                    </View>        
                  </View>
                
                
                
                
                </View>

  
              </View>
    
             )
  }

}

 

const colors = {
    primary: '#F7F0F0',
};

const styles = StyleSheet.create({
  texto:{
    fontSize: 20,
    fontWeight: 'bold'
  },

  correo:{

  },


  cuerpo:{
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-start',   // ← Cambiado para centrar desde arriba
    alignItems: 'center',           // ← Centra horizontalmente
    paddingTop: 50,
    
   
  
  },

  cuadro:{
    padding: 25,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    shadowOffset: {width: 0, height: 7},
    shadowRadius: 10,
    marginBottom: 25,
    borderRadius: 20,
    width: '85%',
    alignItems: 'center'
  },

  separacion:{
    marginBottom: 20
  },

  botones_texto: {
    backgroundColor: 'white',
    color: 'black',
    fontWeight: 'bold',

  },

  botones:{
    flexDirection: 'row',      
    alignItems: 'center',
    width: '100%',


  },

  icon: { marginRight: 20, width: 30 },
})