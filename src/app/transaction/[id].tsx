import { useLocalSearchParams } from "expo-router"
import { Text, View } from 'react-native';
import { useState } from "react";

import PageHeader from "@/app/components/PageHeader";
import Input from "@/app/components/Input";
import InputCurrency from "@/app/components/InputCurrency";
import Button from "@/app/components/Button";
import TransactionButton from "@/app/components/TransactionButton";
import { TransactionsType } from "@/utils/TransactionsType";

export default function Transaction() {
  const [type, settype] = useState(TransactionsType.Input)

  const params = useLocalSearchParams<{ id: string }>()

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <PageHeader
        title="Nova Transação"
        subtitle={`A cada valor guardado você fica mais perto da sua meta.`}
      />

      <View style={{ marginTop: 32, gap: 16 }}>
        <TransactionButton
          selected={type}
          onChange={settype}
        />

        <InputCurrency label="Valor (R$)" value={0} />
        <Input label="Motivo (opcional)" placeholder="Ex: CDB de 110% do CDI" />
        <Button title="Salvar Transação" onPress={() => console.log('Salvar transação')} />
      </View>
    </View>
  )
}