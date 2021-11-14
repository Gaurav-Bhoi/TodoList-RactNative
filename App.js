import React, {useState} from "react";
import {Button,TouchableOpacity,TextInput,KeyboardAvoidingView,View, Text, StyleSheet, Keyboard} from 'react-native'
import Constants from 'expo-constants'
import TaskComponent from "./components/task";


export default function app(){
  const [task, setTask] = useState()
  const [taskItem, setTaskItem] = useState([])

  ///THIS IS WHERE TASK IS ADDED TO LIST
  const addTask = () =>{
    Keyboard.dismiss()
    setTaskItem([...taskItem, task])
    setTask(null)
  }

  ///THIS IS WHERE TASK IS DELETED FROM LIST. TO DELETE TASK CLICK ON TASK
  const deleteTask = (index) => {
    let taskArrayCopy = [...taskItem]
    taskArrayCopy.splice(index, 1)
    setTaskItem(taskArrayCopy)
  }
  
  return(
    <View style = {style.appWindow}>

      <View style = {style.mainComponent}>
        <Text style = {style.taskTitle}>Today's Task</Text>

        {
          taskItem.map((item, index) => {return(
            <TouchableOpacity key = {index} onPress = {() => {deleteTask(index)}}>
              <TaskComponent task = {item}/>    
              {/*TaskComponent is imported from ./Components/Task */}
            </TouchableOpacity>
          )})
        }
      </View>


      {/*KEYBOARD FOR ADDING TASK*/}          
      <KeyboardAvoidingView style = {style.bottomComponent}>
        <TextInput placeholder = 'Enter Task Here' value = {task} style = {style.inputTask} onChangeText = {task => setTask(task) }/>
        <TouchableOpacity style = {style.addButton} onPress = {() => addTask()}>
          <Text style = {style.addIcon}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  )
}

const style = StyleSheet.create({
  appWindow:{
    flex: 1,
    backgroundColor: 'dodgerblue'
  },

  mainComponent:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },

  taskTitle:{
    fontWeight: 'bold',
    fontSize: 25,
  },

  bottomComponent:{
    position: 'absolute',
    height: 40,
    bottom: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20
  },
  
  inputTask:{
    backgroundColor: '#E8EAED',
    height: 50,
    borderRadius: 25,
    width: '80%',
    textAlign: 'center',
    
  },

  addButton:{
    height: 50,
    width: 50,
    backgroundColor: '#E8EAED',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addIcon:{
    fontSize: 30,
  }
})