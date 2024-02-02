import React, { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import ResultIMC from './ResultIMC/index';

import styles from './style';

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [menssageIMC, setMenssageIMC] = useState('Preencha o peso e a altura')
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState('Calcular')

    function imcCalculator() {
        if (weight != null && height != null) {
            const weightValue = parseFloat(weight.replace(',', '.'));
            const heightValue = parseFloat(height.replace(',', '.'));
    
            if (!isNaN(weightValue) && !isNaN(heightValue)) {
                const calculatedImc = (weightValue / (heightValue * heightValue)).toFixed(2);
                setImc(calculatedImc);
            }
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMenssageIMC("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            return
        }

        setImc(null)
        setTextButton("Calcular")
        setMenssageIMC("Preencha o peso e a altura")
    }

    return (
        <View style={styles.formContex}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setHeight}
                    value={height}
                    placeholder='Digite sua altura... EX: 1.75'
                    keyboardType='numeric'
                    onEndEditing={() => Keyboard.dismiss()}
                />
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder='Digite seu peso... EX: 75.90'
                    keyboardType='numeric'
                    onEndEditing={() => Keyboard.dismiss()}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        validationImc()
                    }}
                >
                    <Text style={styles.txtButton}>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultIMC
                menssageResultIMC={menssageIMC}
                ResultIMC={imc}
            />
        </View>
    );
}