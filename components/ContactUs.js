import React from 'react';
import { Text,TextInput ,TouchableOpacity,StyleSheet,View  } from 'react-native';


export default class ContactForm extends React.Component{
  constructor(){
    super();
    this.state = ({
      firstname:'',
      lastname:'',
      email:'',
      subject:'',
      desription:'',

    })
  }

  updateValue(text, field){
    console.warn(text)
  }

submit(){
let collection = {}
  collection.firstname = this.state.firstname,
  collection.lastname = this.state.lastname,
  collection.email = this.state.email,
  collection.subject = this.state.subject,
  collection.description = this.state.description,
  console.warn(collection);

 let url = 'mockbin.org';

 fetch(url , {
   method: 'POST',
   body:JSON.stringfy(collection),
   headers:new Headers({
     "Content-Type": "application/json"
   }).then(res => res.json())
   .catch(error=>console.log("Error", error))
   .then(response => console.log('Success', response))
 })
  
}

render() {
  return (
     <View style={styles.container}>
      <Text style={styles.text}>Contact Us</Text>
      <TextInput 
      placeholder="First Name"
      style={styles.input}
      onChangeText={(text)=>this.updateValue(text, 'firstname')}
      />
      <TextInput 
      placeholder="Last Name"
      style={styles.input}
      onChangeText={(text)=>this.updateValue(text, 'lastname')}
      />
      <TextInput 
      placeholder="Email"
      style={styles.input}
      onChangeText={(text)=>this.updateValue(text, 'email')}
      />
      <TextInput 
      placeholder="Subject"
      style={styles.input}
      onChangeText={(text)=>this.updateValue(text, 'subject')}
      />
      <TextInput 
      placeholder="description"
      style={styles.input}
      onChangeText={(text)=>this.updateValue(text, 'description')}
      />
      
<TouchableOpacity style={styles.btn}
onPress = {() => this.submit()}>
<Text>Submit</Text>
</TouchableOpacity>


      </View>
  )
}

}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop:50,
    padding: 20,
  },
  text:{
    textAlign:'center',
    fontSize:24,
  
  },
  btn: {
    backgroundColor: 'skyblue',
    justifyContent:'center',
    alignItems:'center',
  },
  input: {
    borderBottomWidth:1,
  }
})
