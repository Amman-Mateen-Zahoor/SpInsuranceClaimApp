import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import Localization from '../../../constants/localization'
import { useSelector } from 'react-redux'
import { wp } from '../../../utils/utils'
import DamageReportCard from '../../../components/DamageReportCard'
import CmpDamageCard from '../../../components/CmpDamageCard'

const CmpDamageClaim = () => {
   const {lang} = useSelector(state=>state.language)
 const [report, setReport] = useState([
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
    {
      name: 'William Karlsson',
      date: 'May 25, 2023',
      type: 'Vehicle',
      img: require('../../../assets/images/pp.jpg'),
    },
    {
      name: 'Cristina Nilsson',
      date: 'May 25, 2023',
      type: 'Property',
      img: require('../../../assets/images/p2.jpg'),
    },
  ]);
     
  return (
  <CommonLayout
  heading={Localization.damage_reports[lang]}
  company
  setIconWithoutSearch
  disablScrollView>
 <FlatList
          data={report}
          style={{padding:wp(5)}}
          contentContainerStyle={{
            paddingBottom: wp(5),
            padding: 5,
          }}
          renderItem={({item}) => <CmpDamageCard item={item} />}
        />
  </CommonLayout>
  )
}

export default CmpDamageClaim

const styles = StyleSheet.create({
      
})