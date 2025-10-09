//1.- Importar estilos (StyleSheet)
//Importar imagenes de fondo(ImageBackground)
//De fondo
//Importar componentes de React native
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.- ------------------ Zona de componentes -------------------------------------------------
export default function App() {

  const [Contador, setContador] = useState(0); // Hooks
  

  return (
    // Visualizar el contenido (view)
    // Agregar texto (text)
    // Statusbar 
    <View style={styles.container}>
      <Text style={styles.texto}>Contador:  </Text>
      <Text style={styles.texto2}>{Contador}</Text>

      <View style={styles.boton}>
        <Button title='Agregar' onPress={() => setContador(Contador + 1)}></Button>
        <Button title='Eleminar' onPress={() => setContador(Contador - 1)}></Button>
        <Button title='Reiniciar' onPress={() => setContador(Contador - Contador)}></Button>
      </View>
      

      <StatusBar style="auto" />
    </View>
  );
}

// Propiedades del boton
//----------------------------------------- Hooks -----------------------------------------------
// Hooks (estudiar)
// State (useState) se compone una variable inicia del componente, y una funcion que es la encargada de detectar el cambio
// No son exclusivos del cambio, cada componente tiene su estado

//3.--------------------------- Estilos o hojas de estilos -----------------------------------------------------
// No es css como tal
// Con flex box daremos diseño a los botones (propiedad)
// Podemos estandalizarlo en un solo archivo ya que es un objeto
// 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ec0606ff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    color: "Black",
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: "bold",
    fontStyle: "italic",
    textDecorationLine: "line-through",
  },

    texto2: {
    color: '#813838ff',
    fontSize: 30,
    fontFamily: "Times New Roman",
    fontWeight: 700,
    fontStyle: "italic",
    textDecorationLine: "line-through",
  },

    boton: {
    marginTop: 15,
    flexDirection: "row",  
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
});
