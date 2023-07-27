import React, {FC, ChangeEvent} from 'react';
import {TextInput, TextInputProps, View} from 'react-native';

interface InputFieldProps extends TextInputProps {
  onChangeText: (text: string) => void;
  placeholder?: string;
  customInputStyle?: object;
  maxLength?: number;
  value: any;
  customMainStyle?: object;
}

const InputField: FC<InputFieldProps> = ({
  onChangeText,
  placeholder = 'First name',
  customInputStyle,
  maxLength,
  value,
  customMainStyle,
}) => {
  const handleTextChange = (text: string) => {
    onChangeText(text);
  };

  return (
    <View style={[customMainStyle]}>
      <TextInput
        onChangeText={handleTextChange}
        cursorColor={'purple'}
        style={[{fontSize: 35, fontWeight: '700'}, customInputStyle]}
        placeholderTextColor={'lightgrey'}
        placeholder={placeholder}
        maxLength={maxLength}
        value={value}
      />
    </View>
  );
};

export default InputField;
