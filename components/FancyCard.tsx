import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
        source={{
            uri: 'https://www.businessinsider.in/photo/101043849/Top-5-places-to-visit-in-Jaipur.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}>
            <Text style={styles.cardTitle}> Hawa Mahal</Text>
            <Text style={styles.cardLabel}> Pink City, Jaipur </Text>
            <Text style={styles.cardDescription}>The Hawa Mahal is a palace in the city of Jaipur, India.
            Built from red and pink sandstone, it is on the edge of the City Palace. </Text>
            <Text style={styles.cardFooter}> 12 mins away </Text>
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
        height: 360,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 16
    },
    cardElevated: {
        backgroundColor: 'lightblue',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        },
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        color: '#000000',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardLabel: {
        color: '#000000',
        fontSize: 14,
        marginBottom: 6,
    },
    cardDescription: {
        color: '#0A3D62',
        fontSize: 12,
        marginBottom: 12,
        marginTop: 6,
        flexShrink: 1,
    },
    cardFooter: {
        color: '#000000',
        textAlign: 'right'
    },
})