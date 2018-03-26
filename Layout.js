import React from 'react';
import {AppRegistry, StyleSheet, View, Text} from 'react-native';
export default class Layout extends React.Component {
  render() {
    return (
      <View style={styles.containerMain}>
        <View style={styles.box1}>
          <Text style={styles.text}>Pendidikan Teknik Informatika</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Slider</Text>
        </View>
        <View style={styles.box3}>
          <View style={styles.minibox} ><Text>1</Text></View>
          <View style={styles.minibox} ><Text>2</Text></View>
          <View style={styles.minibox} ><Text>3</Text></View>
          <View style={styles.minibox} ><Text>4</Text></View>
        </View>
        <View style={styles.box4}>
          <View style={styles.minibox} ><Text>5</Text></View>
          <View style={styles.minibox} ><Text>6</Text></View>
          <View style={styles.minibox} ><Text>7</Text></View>
          <View style={styles.minibox} ><Text>8</Text></View>
        </View>
        <View style={styles.box5}>
          <Text style={styles.text}>#jaenKuliahdiPTI</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    containerMain: {
      backgroundColor: '#FFFAF0',
      flex:1,
      flexDirection:'column'
    },
    box1:{
      flex: 1,
      backgroundColor: '#191970',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center'

    },
    box2:{
      flex: 3,
      backgroundColor: '#6A5ACD',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    box3: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'

  },
  box4: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#6A5ACD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
    box5:{
      flex: 1,
      backgroundColor: '#191970',
      flexDirection : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10,
    },
    text: {
      fontSize:20,
      color: 'white',

    },
    minibox: {
    width: 50,
    height: 50,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
});
