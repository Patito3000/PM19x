import { Text, StyleSheet, View, FlatList } from 'react-native'
import { useState, useEffect } from 'react';


import { productos } from '../store/productosStore'


const ListScreen = () => {
  const [productList, setProductList] = useState(productos);


    return (
      <View style={styles.lista}>
        <FlatList
            data={productList}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Text>{item.title}</Text>
                <Text>{item.descripcion}</Text>
                <Text>{item.precio}</Text>
              </View>
            )}
        />
      </View>

     

    )
  
}

const styles = StyleSheet.create({
    lista: {
      paddingVertical: 200
    },

    item: {
      padding: 15, // Espacio interno del item
      marginVertical: 8, // Separación vertical entre items
      marginHorizontal: 16, // Separación horizontal desde los bordes
      backgroundColor: '#f0f0f0', 
    }
})



export default ListScreen;