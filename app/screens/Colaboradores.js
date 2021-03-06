import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import CustomHeader from '../drawer/CustomHeader'

export default function Colaboradores({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Colaboradores" navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Información de los Colaboradores  ...</Text>
            </View>      
        </SafeAreaView>
    )
}