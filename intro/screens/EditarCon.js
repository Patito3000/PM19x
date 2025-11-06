import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import { Feather } from '@expo/vector-icons'

export default function EditarCon() {
  const [contrasenaActual, setContrasenaActual] = useState('')
  const [nuevaContrasena, setNuevaContrasena] = useState('')

  const handleGuardar = () => {
    if (contrasenaActual.trim() === '' || nuevaContrasena.trim() === '') {
      const mensaje = 'Por favor, completa ambos campos.'
      if (Platform.OS === 'web') {
        alert(mensaje)
      } else {
        Alert.alert('Atención', mensaje, [{ text: 'OK' }])
      }
      return
    }

    if (contrasenaActual !== '1234') {
      const mensaje = 'La contraseña actual es incorrecta.'
      if (Platform.OS === 'web') {
        alert(mensaje)
      } else {
        Alert.alert('Error', mensaje, [{ text: 'OK' }])
      }
      return
    }

    const mensaje = 'Cambio realizado\nLa contraseña ha sido actualizada correctamente.'
    if (Platform.OS === 'web') {
      alert(mensaje)
    } else {
      Alert.alert('Éxito', mensaje, [{ text: 'OK' }])
    }

    setContrasenaActual('')
    setNuevaContrasena('')
  }

  return (
    <View style={styles.cuerpo}>
      <View style={styles.cuadro}>
        <Text style={styles.texto}>Contraseña</Text>
      </View>

      <View style={styles.cuadro}>
        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#33604E" style={styles.iconIzq} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña actual"
            secureTextEntry={true}
            value={contrasenaActual}
            onChangeText={setContrasenaActual}
          />
        </View>

        <View style={styles.inputContainer}>
          <Feather name="lock" size={24} color="#33604E" style={styles.iconIzq} />
          <TextInput
            style={styles.input}
            placeholder="Nueva contraseña"
            secureTextEntry={true}
            value={nuevaContrasena}
            onChangeText={setNuevaContrasena}
          />
        </View>

        <View style={styles.separacion}>
          <TouchableOpacity style={styles.botonGuardar} onPress={handleGuardar}>
            <Text style={styles.botonGuardarTexto}>Guardar cambios</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const colors = {
  primary: '#E7E7E7',
  accent: '#33604E',
}

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
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  iconIzq: {
    width: 30,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: '#333',
  },
  separacion: {
    marginTop: 10,
  },
  botonGuardar: {
    backgroundColor: colors.accent,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
  },
  botonGuardarTexto: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
})