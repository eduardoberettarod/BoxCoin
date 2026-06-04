import { Text, View, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import { router } from 'expo-router'
import { colors } from '@/theme/colors'

type Props = {
  title: string,
  subtitle?: string,
  rightButton?: {
    onPress: () => void,
    icon: keyof typeof Feather.glyphMap
  }
}

export default function PageHeader({ title, subtitle, rightButton }: Props) {

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity activeOpacity={0.8} onPress={() => router.back()}>
          <Feather name='chevron-left' size={32} color={colors.black} />
        </TouchableOpacity>

        {rightButton &&
          <TouchableOpacity activeOpacity={0.8} onPress={rightButton?.onPress}>
            <Feather name={rightButton?.icon} size={24} color={colors.gray[500]} />
          </TouchableOpacity>
        }

      </View>
      <Text style={styles.title}>{title}</Text>

      {subtitle &&
        <Text style={styles.subtitle}>{subtitle}</Text>
      }

    </View>
  )
}
