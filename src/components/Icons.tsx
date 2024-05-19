import React from 'react'

import { PropsWithChildren } from 'react'

//* This is not an original library, it installs further sub-libraries that I can target, one of them is FontAwesome 
import Icon from 'react-native-vector-icons/FontAwesome'

type IconsProps = PropsWithChildren<{
    name: string
}>

function Icons({ name }: IconsProps) {
    switch (name) {
        case 'circle':
            return <Icon name="circle-thin" size={38} color='#F7CD2E'/>
            break
        case 'cross':
            return <Icon name="times" size={38} color='#38CC77'/>
            break
        default:
            return <Icon name="pencil" size={38} color='#0D0D0D'/>
    }
}

export default Icons