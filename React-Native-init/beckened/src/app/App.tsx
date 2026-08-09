import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  // const [data, setData] = useState(null);
  // useEffect(() => {
  //   async function fetchData() {
  //     try{
  //     const response = await fetch("https://api.freeapi.app/api/v1/public/randomusers?page=1&limit=10");
  //     const data = await response.json();
  //     // console.log(data); // to see the data in console
  //     setData(data);
  //   }catch(error){
  //     console.error(error);
  //   }
  //   };
  //   fetchData();
  // }, []);  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ghazi's App and I'm Yusuf</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#141313',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
  },
});
