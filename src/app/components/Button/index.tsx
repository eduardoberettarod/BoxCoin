import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator
} from 'react-native'
import { styles } from './style'
import { colors } from '@/theme/colors'

type Props = TouchableOpacityProps & {
  title: string,
  isLoading?: boolean
}

export default function Button({ title, isLoading = false, ...rest }: Props) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      <Text style={styles.title}>
        {
          isLoading ?
            (<ActivityIndicator size={'small'} color={colors.white} />)
            : title
        }
      </Text>
    </TouchableOpacity >
  )
}
