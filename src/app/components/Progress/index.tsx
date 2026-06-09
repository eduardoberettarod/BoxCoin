import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './style'

type Props = {
  data: {
    current: string,
    goal: string,
    percentage: number
  }
}

export default function Progress({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Valor Guardado</Text>

      <View style={styles.status}>
        <Text style={styles.label}>
          {data.current}
          <Text style={styles.goal}> de {data.goal}</Text>
        </Text>
        <Text style={styles.percentage}>{data.percentage.toFixed(2)}%</Text>
      </View>

      <View style={styles.progress}>
        <View style={[styles.currentProgress, { width: `${data.percentage}%` }]} />
      </View>

    </View>

  )
}