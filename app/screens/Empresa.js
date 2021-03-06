import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import CustomHeader from '../drawer/CustomHeader'

export default function Empresa({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Empresa" navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Información de la Empresa ...</Text>
            </View>      
        </SafeAreaView>
    )
}