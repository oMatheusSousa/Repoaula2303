import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text} from 'react-native';

import { styles } from './styles';

interface TextProps extends TouchableOpacityProps{
  title: string;
}

export function TaskCard({title, ...rest}: TextProps ){
        <TouchableOpacity 
            style={styles.buttonTask}
            {...rest}
        >
        <Text style={styles.textTask}>
        {title}
        </Text>
        </TouchableOpacity>
    }