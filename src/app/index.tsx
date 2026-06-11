import { useCallback, useState } from "react";
import { View, Text, Alert } from "react-native";
import { router, useFocusEffect } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useBoxCoinDatabase } from "@/database/useBoxCoinDatabase";

//components
import HomeHeader from "@/app/components/HomeHeader";
import Target, { TargetProps } from "@/app/components/Target";
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



export default function Index() {

  const insets = useSafeAreaInsets()
  const boxCoinDatabase = useBoxCoinDatabase()
  const [targets, setTargets] = useState<TargetProps[]>([])

  async function fetchTargets(): Promise<TargetProps[]> {
    try {
      const response = await boxCoinDatabase.listBySavedValue()
      console.log(response)
      return response.map((item) => ({
        id: String(item.id),
        name: item.name,
        percentage: item.percentage.toFixed(0) + '%',
        mark: String(item.amount),
        current: String(item.current)
      }))
    } catch (error) {
      Alert.alert("Erro", "Falha ao carregar as metas.")
      console.log(error)
      return []
    }
  }

  async function fetchData() {
    const boxCoinPromise = await fetchTargets()
    const [boxCoinData] = await Promise.all([boxCoinPromise])

    setTargets(boxCoinData)
  }

  useFocusEffect(
    useCallback(() => { fetchData() }, [])
  )

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