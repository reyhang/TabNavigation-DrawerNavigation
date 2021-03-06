import React from 'react'
import VectorIcons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Icons({
    name,
    size,
    color="black",
    focused,
    focusedColor="lightblue",}) {
    return (
        <VectorIcons
        name={name}
        size={size}
        focused={focused}
        focusedColor={focusedColor}
        color={ focused? focusedColor : color}
        />
    )
}

export function FontAwesome({
    name,
    size,
    color="black",
    focused,
    focusedColor="lightblue"}) {
    return (
<FontAwesome5
                name={name}
                size={size}
                focused={focused}
                focusedColor={focusedColor}
                color={ focused? focusedColor : color}
              />
    )
    
}

