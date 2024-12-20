import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const TestCodes = () => {
//   let countdown = 5000; // 5 seconds

// const intervalId = setInterval(() => {
//   countdown -= 1000; // Reduce by 1 second
//   console.log(`Remaining time: ${countdown}ms`);
//   if (countdown <= 0) {
//     clearInterval(intervalId);
//     console.log("Timeout executed!",);
//   }
// }, 1000);


// Simulate the timeout execution
// setTimeout(() => {
//   clearInterval(intervalId,'oio');
// }, 5000);

let timeoutId;
let startTime;
let remainingTime = 5000; // 5 seconds

function startTimer() {
  startTime = Date.now();
  timeoutId = setTimeout(() => {
    // let a = Date.now();
    console.log("Timeout executed!");
  }, remainingTime);
}

function getRemainingTime() {
  const elapsedTime = Date.now() - startTime;
  return Math.max(remainingTime - elapsedTime, 0);
}

// Start the timer
startTimer();

// Check remaining time later
setTimeout(() => {
  console.log(`Remaining time: ${getRemainingTime()}ms`);
}, 2000); // Check after 2 seconds

  return (
    <View>
      <Text>TestCodes</Text>
    </View>
  )
}

export default TestCodes

const styles = StyleSheet.create({})