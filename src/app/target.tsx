import { View, Text } from "react-native"

//components
import PageHeader from "@/app/components/PageHeader"
import Input from "@/app/components/Input"
import InputCurrency from "@/app/components/InputCurrency"
import Button from "@/app/components/Button"

export default function Target() {
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
        />

        <InputCurrency
          label="Valor Alvo"
          value={0}
        />

        <Button title="Salvar" onPress={() => console.log("Salvar Meta")} />
      </View>

    </View>
  )
}