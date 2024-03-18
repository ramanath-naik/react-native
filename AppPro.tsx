import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './components/FlatCards'
import ElevatxedCard from './components/ElevatxedCard'
import FancyCard from './components/FancyCard'
import ActionCard from './components/ActionCard'

const AppPro = () => {
  return (
    <SafeAreaView>
        <ScrollView>
            <FlatCards/>
            <ElevatxedCard/>
            <FancyCard/>
            <ActionCard/>
        </ScrollView>
    </SafeAreaView>
  )
}

export default AppPro