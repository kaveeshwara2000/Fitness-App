import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useEffect, useState} from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { fetchExercisesByBodypart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp, heightPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';



export default function Exercises() {
    const router = useRouter();
    const [exercises, setExercises] = useState([]);
    const item = useLocalSearchParams();
    // console.log('got item: ', item);

    useEffect(()=>{
        // if(item) getExercises(item.name);
    },[item]);

    const getExercises = async (bodypart)=>{
        let data = await fetchExercisesByBodypart(bodypart);
        // console.log('got data: ', data);
        setExercises(data);
    }
  return (
    <ScrollView>
      <StatusBar style='light' />
      <Image
      source={require('../assets/images/Lat-Pulldown.gif')}
      style={{width: wp(100), height: hp(45)}}
      className="rounded-b-[40px]"
      />
      <TouchableOpacity
      onPress={()=> router.back()}
      className="bg-rose-500 mx-4 absolute flex justify-center items-center pr-1 rounded-full"
      style={{height: hp(5.5), width: hp(5.5), marginTop: hp(7)}}
      >
        <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
      </TouchableOpacity>

      <View className="mx-4 space-y-3 mt-4">
        <Text style={{fontSize: hp(3)}} className="font-semibold text-neutral-700">Back Exercises</Text>
      </View>
      <Text style={{fontSize: hp(2)}}>
      Sit on the cable machine with your back straight and feet flat on the ground.
      </Text>
      <Text style={{fontSize: hp(2)}}>
      Grasp the handles with an overhand grip, slightly wider than shoulder-width apart.
      </Text>
      <Text style={{fontSize: hp(2)}}>
      Lean back slightly and pull the handles towards your chest, squeezing your shoulder blades together.
      </Text>
      <Text style={{fontSize: hp(2)}}>
      Pause for a moment at the peak of the movement, then slowly release the handles back to the starting position.
      </Text>
      <Text style={{fontSize: hp(2)}}>
      Repeat for the desired number of repetitions.
      </Text>
    </ScrollView>
  )
}