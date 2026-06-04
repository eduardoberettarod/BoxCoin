import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import React from 'react'

export type TargetProps = {
  id: string,
  name: string,
  percentage: string,
  mark: string,
  current: string
}

type Props = TouchableOpacityProps & {
  data: TargetProps
}

export default function Target({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <View style={styles.content}>
        <Text style={styles.name} numberOfLines={1}>
          {data.name}
        </Text>
        <Text style={styles.status}>
          {data.percentage} • {data.current} de {data.mark}
        </Text>
      </View>
      <Feather name='chevron-right' size={20} />
    </TouchableOpacity>
  )
}
