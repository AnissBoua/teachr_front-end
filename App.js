import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import TeachrCard from './components/TeachrCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';



export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [teachrs, setTeachrs] = React.useState([]);
  const localhostIP = "192.168.1.144"  // to test the API in localhost the IPAddress(you can get it by tiping 'ipcongif' in cmd) is required

  const getTeachrs = async () => {
    try {
      const response = await axios.get('http://'+ localhostIP +':8000/getteachrs');
      const data = await response.data;
      console.log(data);
      setTeachrs(data);
    } catch (error) {  
      console.error(error);
    } finally {  
      setLoading(false);
    } 
  }

  React.useEffect(() => {
    getTeachrs();
  }, []);

  const teachrsList = teachrs.map((teachr,  index) =>
  <TeachrCard key={index} prenom={teachr.prenom}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon icon={faAngleLeft} color={'white'} size={32}/>
        <Text style={styles.headerTitle}>Teach'rs favoris</Text>
      </View>
      <View style={styles.cardWrapper}>{teachrsList}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width:"100%",
    height: 150,
    textAlign: "center",
    backgroundColor: "#076ec0",
    padding: { top: StatusBar.currentHeight + 10,
    
    }
  },
  headerTitle: {
    color:"white",
    fontSize:32,
    
  },
  cardWrapper: {
  },
});
