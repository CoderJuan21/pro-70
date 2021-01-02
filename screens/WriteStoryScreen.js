import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image } from 'react-native';
import * as Permissions from 'expo-permissions'
import { BarCodeScanner } from 'expo-barcode-scanner';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state={
title:'',
author:'',
storyText:''
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    placeholder="Title"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.title}>
                    </TextInput>

                    <TextInput style={styles.inputBox}
                    placeholder="Author"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.author}>
                    </TextInput>

                    <TextInput style={styles.inputBox}
                    placeholder="Story Text"
                    onChangeText={(text)=>{
                        this.setState({
                            title:text
                        })
                    }}
                    value={this.state.storyText}>
                    </TextInput>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"green",
    },
    inputBox:{
        fontSize:20,
        width:150,
        height:100,
    }
})