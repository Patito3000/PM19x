import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Alert, ScrollView } from 'react-native'


export default function SeguridadScreen() {

  return (
    <View style={styles.cuerpo}>
      <View style={styles.cuadro}>
        <Text style={styles.texto}>Seguridad y privacidad</Text>
      </View>

      <View style={styles.cuadro}>
        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Text style={styles.botones_texto}>Privacidad</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Text style={styles.botones_texto}>Ubicación</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Text style={styles.botones_texto}>Acceso Rapido</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Text style={styles.botones_texto}>Historial</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const colors = {
    primary: '#E7E7E7',
};

const styles = StyleSheet.create({
  cuerpo:{
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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

  texto:{
    fontSize: 20,
    fontWeight: 'bold'
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
})