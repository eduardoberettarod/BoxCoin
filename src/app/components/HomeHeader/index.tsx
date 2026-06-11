import { View, Text } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { styles } from './style'
import { colors } from "@/theme/colors"
import Separator from "@/app/components/Separator"
import Resume, { ResumeProps } from "@/app/components/Resume"

export type HomeHeaderProps = {
  total: string,
  input: ResumeProps,
  output: ResumeProps
}

type Props = {
  data: HomeHeaderProps
}

export default function HomeHeader({ data }: Props) {
  return (
    <LinearGradient
      colors={[
        colors.teal[500], colors.teal[800]
      ]}
      style={styles.container}
    >

      <View>
        <Text style={styles.label}>Total que você possui</Text>
        <Text style={styles.total}>{data.total}</Text>
      </View>

      <Separator
        color={colors.translucent}
      />

      <View style={styles.resumoContainer}>
        <Resume
          data={data.input}
          icon={{
            nameIcon: 'arrow-up',
            colorIcon: colors.green[400]
          }}
        />

        <Resume
          data={data.output}
          icon={{
            nameIcon: 'arrow-down',
            colorIcon: colors.red[500]
          }}
          isRight={true}
        />
      </View>


    </LinearGradient>
  )
}