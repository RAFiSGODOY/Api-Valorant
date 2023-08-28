import React, { useState } from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const FormField = ({ label }) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useSharedValue(0);

  const labelAnimatedStyle = useAnimatedStyle(() => {
    const fontSize = interpolate(animatedValue.value, [0, 1], [16, 12]);
    const translateY = interpolate(animatedValue.value, [0, 1], [0, -20]);
    return {
      fontSize,
      transform: [{ translateY }],
    };
  });

  const handleFocus = () => {
    setIsFocused(false);
    animatedValue.value = withTiming(1, { duration: 200, easing: Easing.ease });
  };

  const handleBlur = () => {
    setIsFocused(false);
    animatedValue.value = withTiming(0, { duration: 200, easing: Easing.ease });
  };

  return (
    <View style={styles.container}>
      <AnimatedTextInput
        style={[styles.input, isFocused && styles.focused]}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <Animated.Text style={[styles.label, labelAnimatedStyle]}>{label}</Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems:"center",
    marginTop: 330,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    width: 250,
  },
  focused: {
    borderColor: 'blue',
  },
  label: {
    position: 'absolute',
    left: 10,
    top: 10,
    fontSize: 16,
    color: '#aaa',
  },
});

export default FormField;