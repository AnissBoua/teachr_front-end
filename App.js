import React from 'react';
import axios from 'axios';
import { StyleSheet, Text, View, StatusBar, ScrollView, Dimensions } from 'react-native';
import TeachrCard from './components/TeachrCard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons/faAngleLeft';
import Carousel from 'react-native-snap-carousel'; // the warning messege ViewPropTypes will be removed come from here!!
import { orientationDetection } from './components/OrientationDetection';


export default function App() {
  const [isLoading, setLoading] = React.useState(true);
  const [teachrs, setTeachrs] = React.useState([]);
  const localhostIP = "192.168.1.144"  // to test the API in localhost your IPAddress is required (you can get it by tiping 'ipcongif' in cmd)
  const isCarousel = React.useRef(null)
  const orientation = orientationDetection()
  const SLIDER_WIDTH = orientation === 'PORTRAIT' ? Dimensions.get('window').width - 110 : Dimensions.get('window').width - 300
  const ITEM_WIDTH = Math.round(SLIDER_WIDTH )

  const getTeachrs = async () => {
    try {
      const response = await axios.get('http://'+ localhostIP +':8000/getteachrs');
      const data = await response.data;
      // console.log(data);
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

//   Send API data to component and display it without react-native-snap-carousel
//   const teachrsList = teachrs.map((teachr,  index) => { 
//   return <TeachrCard key={index} index={index} prenom={teachr.prenom}/>
// });

  const teachrsListFunction = (teachr) => {
    return <TeachrCard  key={teachr.item.id} index={teachr.index} prenom={teachr.item.prenom}/>
  };

  return (
    <View style={styles.container}>
      <View style={[styles.header, {flexDirection: orientation === 'PORTRAIT' ? 'column' : 'row', paddingTop: orientation === 'PORTRAIT' ? StatusBar.currentHeight + 25 : StatusBar.currentHeight ,}]}>
        <FontAwesomeIcon style={{marginTop: orientation === 'PORTRAIT' ? 30 : 0,}} icon={faAngleLeft} color={'white'} size={32}/>
        <Text style={[styles.headerTitle, {marginTop: orientation === 'PORTRAIT' ? 30 : 0, paddingVertical: orientation === 'PORTRAIT' ? 20 : 0,}]}>Teach'rs favoris</Text>
      </View>
      <View style={[styles.cardWrapper, {flex: orientation === 'PORTRAIT' ? 3 : 5,}]}>
        <Carousel
                style={styles}
                ref={isCarousel}
                data={teachrs}
                renderItem={teachrsListFunction}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                inactiveSlideOpacity={1}
                inactiveSlideScale={1}
              />
        {/* without react-native-snap-carousel <ScrollView horizontal >{teachrsList}</ScrollView> */}
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
  header: {
    
    flex: 1,
    width:"100%",
    backgroundColor: "#076ec0",
    
    paddingLeft: 25,
  }, 
  headerTitle: {
    color:"white",
    fontSize:32,
  },
  cardWrapper: {
    flexDirection: "row",
    overflow: "scroll",
    
    paddingLeft: 15, 
  },
});
