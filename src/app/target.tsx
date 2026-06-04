import { View, Text } from "react-native"
import PageHeader from "./components/PageHeader"
import Input from "./components/Input"
import Button from "./components/Button"

export default function Target() {
  return (
    <View style={{ flex: 1, padding: 24, gap: 32 }}>
      <PageHeader
        title="Meta"
        subtitle="Economize para alcançar sua meta financeira"
        rightButton={{
          icon: 'edit-2',
          onPress: () => console.log("Editar Meta")
        }}
      />

      <View style={{ marginTop: 32, gap: 24 }}>
        <Input
          label="Nome da Meta"
          placeholder="Ex: Comprar um carro zero."
        />

        <Input
          label="Nome da Meta"
          placeholder="Ex: Comprar um carro zero."
        />

        <Button title="Salvar" onPress={() => console.log("Salvar Meta")} />
      </View>

    </View>
  )
}