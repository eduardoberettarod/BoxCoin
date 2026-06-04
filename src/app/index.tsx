import { View, Text } from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { use } from "react";

import HomeHeader from "./components/HomeHeader";
import Target from "./components/Target";
import List from "@/app/components/List";
import Button from "@/app/components/Button";

const resume = {
  total: 'R$ 20.543,87',
  input: {
    label: 'Entrada',
    value: 'R$ 9.543,83'
  },
  output: {
    label: 'Saída',
    value: '-R$ 1.783,29'
  }
}

const targets = [
  {
    id: '1',
    name: "Jantar Especial",
    percentage: '50%',
    mark: "R$ 2.000,00",
    current: 'R$ 1.000,00'
  },
  {
    id: '2',
    name: "Almoço Executivo",
    percentage: '30%',
    mark: "R$ 1.500,00",
    current: 'R$ 1.050,00'
  },
  {
    id: '3',
    name: "Café da Manhã Premium",
    percentage: '20%',
    mark: "R$ 800,00",
    current: 'R$ 640,00'
  }
]



export default function Index() {

  const insets = useSafeAreaInsets()

  return (
    <View style={{ flex: 1 }}>
      <HomeHeader data={resume} />

      <List
        title="Metas"
        data={targets}
        renderItem={({ item }) =>
          <Target
            data={item}
            onPress={() => router.navigate(`/in-progress/${item.id}`)}
          />
        }
        emptyMessage="Nenhuma meta encontrada."
        containerStyle={{ paddingHorizontal: 24 }}
      />

      <View style={{ padding: 24, marginBottom: 32 }}>
        <Button
          title="Nova Meta"
          onPress={() => router.navigate("/target")}
        />
      </View>

    </View>
  )
}