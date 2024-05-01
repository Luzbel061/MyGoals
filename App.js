import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
 const[enteredGoalText, setEnteredGoalText] = useState('')
 const [goals, setGoals] = useState([])

  function handleInputGoal(enteredText){
    console.log(enteredText)
    setEnteredGoalText(enteredText)
  }

  function handleAddGoal(){
    console.log(enteredGoaltext)
    setGoals(() => [...goals, {text: enteredGoals, Key:Math.random().toString()}])
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
        style={styles.textInput}
        placeholder='Your Goal'
        onChnageText={handleInputGoal}
        />
        <Button
        title='Add Goal'
        color={'#A3FFD6'}
        onPress={handleAddGoal}
        />
        </View>
        <View style={goalsContainer}>
          <FlatList
          data={goals}
          renderItem={ (itemData)=> {
            <view style={styles.goalsItem}>
              <text style={styles.goalstext}>

              </text>
            </view>
          }}
          >
          </FlatList>
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
