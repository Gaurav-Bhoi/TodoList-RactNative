import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'


export default function TaskComponent(props){
    return(
        <View style = {style.wholeComponent}>

            <View style = {style.insideComponent}>
                <View style = {style.leftComponent}>
                    <TouchableOpacity style = {style.leftComponent}>
                        <TouchableOpacity style = {style.square}></TouchableOpacity>
                    </TouchableOpacity>
                    <Text style = {style.taskName}>{props.task}</Text>
                </View>                
                <TouchableOpacity style = {style.circle}></TouchableOpacity>
            </View>                
        
        </View>
    )
}

const style = StyleSheet.create({
    wholeComponent: {
        backgroundColor: '#E8EAED',
        borderRadius: 10,
        marginTop: 20,
    },
    
    square:{
        backgroundColor: '#55BCF6',
        height: 24, 
        width: 24,
        borderRadius: 6,      
        marginRight: 20,
    },
    leftComponent:{
        flexDirection: 'row',
    },
    
    circle:{
        height: 18,
        width: 18,
        borderColor: '#55BCF6',
        borderRadius: 9,
        borderWidth: 4,
        opacity: 0.4,
        alignSelf: 'center'
    },
    insideComponent:{
        flexDirection: 'row',
        justifyContent: 'space-between',    
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    taskName:{
        color: 'black',
        maxWidth: 200,
    }
})