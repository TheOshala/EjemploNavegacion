import React from 'react'
import { View, Text, SafeAreaView, Image } from 'react-native'

import CustomHeader from '../drawer/CustomHeader'

export default function Muro({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title=" Pantalla Principal"  isHome={true} navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Muro - Home</Text>
            </View>      
        </SafeAreaView>
    )
}

