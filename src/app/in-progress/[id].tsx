import { View, Text } from "react-native";
import { router, useLocalSearchParams } from "expo-router";

//components
import PageHeader from "@/app/components/PageHeader";
import Button from "@/app/components/Button";
import List from "@/app/components/List";
import Progress from "@/app/components/Progress";
import Transaction from "@/app/components/Transaction";
import { TransactionsType } from "@/utils/TransactionsType";

const details = {
  current: 'R$ 2.000,00',
  goal: 'R$ 4.000,00',
  percentage: 50
}

const transactions = [
  {
    id: '1',
    value: 'R$ 300,00',
    date: '12/04/2026',
    description: 'CDB de 110% do CDI',
    type: TransactionsType.Input
  },
  {
    id: '2',
    value: 'R$ 100,00',
    date: '14/04/2026',
    description: 'Retirada de emergencia',
    type: TransactionsType.Output
  },
  {
    id: '3',
    value: 'R$ 700,00',
    date: '16/04/2026',
    description: 'CDB de 110% do CDI',
    type: TransactionsType.Input
  }
]

export default function InProgress() {

  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Apple Watch"
        rightButton={{
          icon: 'edit-2',
          onPress: () => console.log("Editando meta")
        }}
      />

      <Progress
        data={details}
      />

      <List
        title="Transações"
        data={transactions}
        renderItem={({ item }) => (
          <Transaction data={item} onRemove={() => console.log("Remover Transações")} />
        )}
      />

      <Button
        title="Nova Transação"
        onPress={() => router.navigate(`/transaction/${params.id}`)}
      />
    </View>
  )
}