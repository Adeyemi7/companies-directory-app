import React from 'react'
import { Stack } from 'expo-router'

const JobLayout = () => {
  return (
    <Stack>
      <Stack.Screen 
          name="index"
          options={{headerShown: false}}
      />
      <Stack.Screen 
          name="search/[id]"
          options={{
            headerTransparent: true,
            headerTitle: '',
          }}
      />
    </Stack>
  )
}

export default JobLayout