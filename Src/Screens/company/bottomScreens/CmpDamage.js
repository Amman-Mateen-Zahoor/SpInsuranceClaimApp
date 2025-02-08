import { StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import CommonLayout from '../../../layout/CommonLayout'
import { useSelector } from 'react-redux'
import Localization from '../../../constants/localization'
import { wp } from '../../../utils/utils'
import DamageReportCard from '../../../components/DamageReportCard'

const CmpDamage = () => {
  const {lang} = useSelector(state=>state.language)
    const [data, setData] = useState([
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      {
        icon: require('../../../assets/icons/car.png'),
        heading: 'Vehicle',
        description: 'Lorem Ipsum is simply dummy text of the printing.',
      },
      
    ]);
  
  return (
<CommonLayout 
heading={Localization.damage_types[lang]}
company
setIconWithoutSearch
disablScrollView
>
<FlatList
        data={data}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <DamageReportCard item={item} />}
        numColumns={2}
      />
</CommonLayout>
  )
}

export default CmpDamage

const styles =StyleSheet.create({
  container:{  
    paddingVertical: wp(3),
    paddingBottom: wp(10),
    paddingHorizontal: wp(5),
  },
});
