import React, { useState } from 'react'
import { Body } from '../../components/home/body';

interface indexProps {

}

export const HomeScreen: React.FC<indexProps> = () => {
    return (
        <div>
            <Body />
        </div>
    );
}