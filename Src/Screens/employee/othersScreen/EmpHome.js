import {StyleSheet, FlatList} from 'react-native';
import React, {useState} from 'react';
import CommonLayout from '../../../layout/CommonLayout';
import {wp} from '../../../utils/utils';
import DamageReportCard from '../../../components/DamageReportCard';

const EmpHome = () => {
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
    <CommonLayout home={true} disablScrollView>
      <FlatList
        data={data}
        contentContainerStyle={styles.container}
        // renderItem={DamageReportCard}
        renderItem={({ item }) => <DamageReportCard item={item} />}
        numColumns={2}
      />
    </CommonLayout>
  );
};

export default EmpHome;
const styles =StyleSheet.create({
  container:{  
    paddingVertical: wp(3),
    paddingBottom: wp(10),
    paddingHorizontal: wp(5),
  },
});

