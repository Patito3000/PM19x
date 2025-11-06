import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'

export default function EditarMoneda() {
  return (
    <View style={styles.cuerpo}>
      <View style={styles.cuadro}>
        <Text style={styles.texto}>Editar Moneda</Text>
      </View>

      <View style={styles.cuadro}>
        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Feather name="dollar-sign" size={24} color="#33604E" style={styles.iconIzq} />
            <Text style={styles.botones_texto}>Moneda</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botones}>
            <Feather name="flag" size={24} color="#33604E" style={styles.iconIzq} />
            <Text style={styles.botones_texto}>País</Text>
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
  cuerpo: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },

  cuadro: {
    padding: 25,
    paddingHorizontal: 40,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 25,
    borderRadius: 20,
    width: '85%',
  },

  texto: {
    fontSize: 20,
    textAlign: 'center',
  },

  separacion: {
    marginBottom: 20,
  },

  botones: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },

  botones_texto: {
    backgroundColor: 'white',
    color: 'black',
    flex: 1,
    textAlign: 'left',
    marginLeft: 10,
  },

  iconIzq: {
    width: 30,
  },
})