import { Text, StyleSheet, View, Button } from 'react-native'
import React, { useState } from 'react'
import ContadorScreen from './ContadorScreen'
import BotonesScreen from './BotonesScreen'
import ListScreen from './ListScreen'

export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>
        case 'botones':
            return <BotonesScreen/>
        case 'List':
            return <ListScreen/>      
        case 'Section':
            return <SectionListScreen/>
        case 'menu':
            default:
                 return (
                    <View style={styles.button}>
                        <Text style={styles.text}>Menu de practicas</Text>
                        <Button color='red' title='Pract:Contador' onPress={()=>setScreen('contador')} />
                        <Button color='yellow' title='Pract:Buttons' onPress={()=>setScreen('botones')} />
                        <Button color='blue' title='Pract:List' onPress={()=>setScreen('List')} />
                        <Button color='green' title='Pract:Section' onPress={()=>setScreen('Section')} /> 
                        <Button color='yellow' title='Pract:List' onPress={()=>setScreen('contador')} />
                        <Button color='pink' title='Pract:Modal' onPress={()=>setScreen('botones')} />
                        <Button color='black' title='Pract:Scroll' onPress={()=>setScreen('contador')} />
                        <Button color='red' title='Pract:Sheet' onPress={()=>setScreen('botones')} />
                        <Button color='brown' title='Pract:Text' onPress={()=>setScreen('botones')} />    
                    </View>
                )

        
    }

   
  
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
  

    },

    text:{
        fontWeight: 'bold'
    }
})