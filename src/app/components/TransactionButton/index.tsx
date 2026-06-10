import { View, Text } from 'react-native'

import { styles } from './style'
import { colors } from '@/theme/colors'
import Options from './options'

import { TransactionsType } from '@/utils/TransactionsType'

type Props = {
  selected: TransactionsType,
  onChange: (type: TransactionsType) => void

}

export default function TransacoesButton({ selected, onChange }: Props) {
  return (
    <View style={styles.container}>
      <Options
        isSelected={selected === TransactionsType.Input}
        title="Guardar"
        icon="arrow-up"
        selectedColor={colors.teal[600]}
        onPress={() => onChange(TransactionsType.Input)}
      />
      <Options
        isSelected={selected === TransactionsType.Output}
        title="Resgatar"
        icon="arrow-down"
        selectedColor={colors.red[400]}
        onPress={() => onChange(TransactionsType.Output)}
      />
    </View>
  )
}