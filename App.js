import { useState } from 'react'
import {StyleSheet, View, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
 const [goals, setGoals] = useState([])

  function handleAddGoal(){
    console.log(enteredGoalText)
    setGoals(() => [...goals, {text: enteredGoalText}])
  }

    function handleDeleteGoal(){
    console.log('DELETE')
  }
  return (
    <View style={styles.container}>
     <GoalInput
     onAddInput={handleAddGoal}
     />
        <View style={styles.goalsContainer}>
          <FlatList
          data={goals}
          renderItem={ (itemData)=> {
            <GoalItem
            itemData={itemData}
            onDeleteItem={handleDeleteGoal}
            />
          }}
          keyExtractor={(item) =>{
            return item.id
          }}
          />
          </View>
          </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  paddingTop: 50,
  paddingHorizontal: 20
 },
inputContainer:{
  flex:1,
  flexDirection: 'row',
  jusofyContent:'center',
  alignItems: 'center',
  marginBotto: 20,
  borderBottomWidth: 1,
  borderBottomColor:'#78C9FF'
},
btnGoal:{
  boderRadius: 20,
  backgroundColor: '#cccccc'
},
textInput: {
  borderWidth: 1,
  borderColor: '#cccccc',
  width:'80%',
  marginRight: 3,
  padding: 8,
  borderRadius: 5
},
goalsContainer:{
  flex:5
},
goalsItem:{
  margin: 8,
  padding:8,
  borderRadius:6,
  backgroundColor: '#8576FF',
  color: 'white'
},
goalText: {
  color:'white'
},

});
