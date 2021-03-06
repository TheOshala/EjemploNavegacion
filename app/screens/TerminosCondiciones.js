import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'

import CustomHeader from '../drawer/CustomHeader'

export default function Terminos({navigation}) {
    return(
        <SafeAreaView style={{flex: 1}}>
            <CustomHeader title="Terminos" navigation={navigation}/>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>Términos y condiciones ...</Text>
            </View>      
        </SafeAreaView>
    )
}