import { useState } from "react"
import { View, Text, Alert } from "react-native"
import { router, useLocalSearchParams } from "expo-router"
import { useBoxCoinDatabase } from "@/database/useBoxCoinDatabase"

//components
import PageHeader from "@/app/components/PageHeader"
import Input from "@/app/components/Input"
import InputCurrency from "@/app/components/InputCurrency"
import Button from "@/app/components/Button"

export default function Target() {
  const [targetName, setTargetName] = useState('')
  const [value, setValue] = useState<number | null>(0)

  const params = useLocalSearchParams<{id?: string}>()
  const boxCoinDatabase = useBoxCoinDatabase()

  function userSave() {
    if(!targetName.trim() || value === null || value <= 0){
      return Alert.alert("Atenção!", "Preencha os campos de nome da meta e valor alvo.")
    }

    if(params.id){
      //update

    }else{
      saveData()
    }
  }

  async function saveData() {
    try {
      await boxCoinDatabase.create({
        name: targetName,
        amount: Number(value)
      })
      Alert.alert("Sucesso", "Meta criada com sucesso.", [
        {
          text: "OK" , onPress: () => router.back()
        }
      ])
    } catch (error) {
      Alert.alert("Erro", "Falha ao criar nova meta.")
      console.log(error)
    }
  }

  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da Meta"
          placeholder="Ex: Comprar um carro zero."
          value={targetName}
          onChangeText={setTargetName}
        />

        <InputCurrency
          label="Valor Alvo"
          value={value}
          onChangeValue={setValue}
        />

        <Button title="Salvar" onPress={() => userSave()} />
      </View>

    </View>
  )
}