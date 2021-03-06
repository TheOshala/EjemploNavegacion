import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default function CustomHeader({title, isHome, navigation}) {
    return(
      <View style={{flexDirection: 'row', height: 50}}>
        <View style={{flex: 1, justifyContent:'center'}}>
          {
              isHome?
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image style={{width: 30, height: 30, marginLeft: 10}}
                  source={require('../../src/images/menu.png')}
                  resizeMode="contain"/>
              </TouchableOpacity>
                :
                <TouchableOpacity 
                  style={{flexDirection: 'row', alignItems: 'center'}}
                  onPress={() => navigation.goBack()}>
                    <Image style={{width: 25, height: 25, marginLeft: 10}}
                      source={require('../../src/images/left-arrow.png')}
                      resizeMode="contain"/>
                    <Text>Back</Text>
                </TouchableOpacity>
          }
        </View>
          <View style={{flex: 1.5 , justifyContent: 'center'}}>
            <Text style={{textAlign: 'center'}}>{title}</Text>
          </View>
          <View style={{flex: 1}}></View>
      </View>       
    )  
  }