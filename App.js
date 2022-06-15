import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';
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
  <TeachrCard key={index} index={index} prenom={teachr.prenom}/>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesomeIcon style={styles.verticalMargin} icon={faAngleLeft} color={'white'} size={32}/>
        <Text style={[styles.verticalMargin, styles.headerTitle]}>Teach'rs favoris</Text>
      </View>
      <View style={styles.cardWrapper}>
        <ScrollView horizontal >{teachrsList}</ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  verticalMargin: {
    marginTop: 30,
  },
  header: {
    flex: 1,
    width:"100%",
    backgroundColor: "#076ec0",
    paddingTop: StatusBar.currentHeight + 25,
    paddingLeft: 25,
  }, 
  headerTitle: {
    color:"white",
    fontSize:32,
  },
  cardWrapper: {
    flex: 3,
    flexDirection: "row",
    overflow: "scroll",
    paddingVertical: 20,
    paddingLeft: 15, 
  },
});
