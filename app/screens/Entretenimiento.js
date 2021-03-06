import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import CustomHeader from '../drawer/CustomHeader'

export default function Entretenimiento({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Entretenimiento" navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Información del Entretenimiento ...</Text>
            </View>      
        </SafeAreaView>
    )
}