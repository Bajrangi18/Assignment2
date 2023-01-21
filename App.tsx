import React, {useEffect, useState} from 'react';
import {FlatList, Text, View,StyleSheet,TextInput, Button} from 'react-native';
import Card from './Components/Card';


const App = () => {
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2');
      const json = await response.json();
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={{flex: 1,backgroundColor: 'white'}}>
          <View style={styles.container}>
      {
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Card email={item.email} avatar={item.avatar} first_name={item.first_name} last_name={item.last_name} id={item.id}/>
          )}
        />
      }
          </View>
          <View style={{flex: 1}}>
              <Register />
          </View>
    </View>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex:4,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
  },
  card: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },

});


const Register = () => {

  const [idData,setIdData] = useState({"id":"","token":""})

  const fetchData = () => {
          var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "email": "eve.holt@reqres.in",
        "password": "pistol"
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://reqres.in/api/register", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result);setIdData(result)})
        .catch(error => console.log('error', error));
    
  }
  return(
      <View style={{backgroundColor: 'white',alignItems: 'center'}}>
      <Text style={{color: 'black', padding:10, fontSize: 20}}>ID: {idData['id']}</Text>
      <Text style={{color: 'black', paddingBottom:10, fontSize: 20}}>Token: {idData['token']}</Text>
      <Button title="Sign Up" onPress={fetchData}/>
      </View>
  )
}