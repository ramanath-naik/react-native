import { StyleSheet, Text, View, Linking,Image, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionCard() {
    function openWebsite(websiteLink: string){
        Linking.openURL(websiteLink)
    }
  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
      <View style={styles.headingContainer}>
        <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
        </Text>
      </View>
      <Image
      source={{
        uri: 'https://phoneunder.files.wordpress.com/2016/03/javascript-logo-png.png'
      }}
      style={styles.cardImage}
      />
      <View style={styles.bodyContainer}>
        <Text numberOfLines={4}>
        JavaScript is a scripting or programming language that 
        allows you to implement complex features on web pages — 
        every time a web page does more than just sit there and 
        static information for you to look at — displaying timely content updates.
        </Text>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity
        onPress={()=>openWebsite('https://www.boardinfinity.com/blog/top-10-features-of-es6/')}
        >
            <Text style={styles.socialLinks}>Read More</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        width: 350,
        height: 370,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    elevatedCard: {
        backgroundColor: 'orange',
        elevation: 3
    },
    headingContainer: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText : {
        color: 'white',
        fontSize: 16,
        fontWeight: '600'
    },
    cardImage :{
        height: 190,
    },
    bodyContainer : { 
        padding: 10
     },
    footerContainer: {
        padding: 8,
        flexDirection: 'row',
        alignItems: "center"
    },
    socialLinks: {
        fontSize: 16,
        color: "green"
    },
})