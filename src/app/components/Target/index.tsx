import { Text, View, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import React from 'react'

export default function Target() {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.name} numberOfLines={1}>
                    Comprar muitos pães de queijo
                </Text>
                <Text style={styles.status}>
                    25% • R$ 250,00 de R$ 1.000,00
                </Text>
            </View>
            <Feather name='chevron-right' size={20} />
        </TouchableOpacity>
    )
}
