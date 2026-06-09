import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import { colors } from '@/theme/colors'
import { TransactionsType } from '@/utils/TransactionsType'

export type TransactionProps = {
  id: string,
  value: string,
  date: string,
  description: string,
  type: TransactionsType
}

type Props = {
  data: TransactionProps,
  onRemove: () => void
}

export default function Transaction({ data, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <Feather
        name={
          data.type === TransactionsType.Input
            ? 'arrow-up'
            : 'arrow-down'
        }

        size={20}

        color={
          data.type === TransactionsType.Input
            ? colors.green[600]
            : colors.red[500]
        }
      />

      <View style={styles.info}>
        <Text style={styles.value}>{data.value}</Text>
        <Text style={styles.description} numberOfLines={1}>
          {data.date} {data.description && `- ${data.description}`}
        </Text>
      </View>

      <TouchableOpacity activeOpacity={0.8} onPress={onRemove}>
        <Feather name='x' size={18} color={colors.gray[500]} />
      </TouchableOpacity>
    </View>
  )
}