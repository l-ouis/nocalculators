
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Stack, Button, Center, TextInput, Badge } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from '../rendering/mathText';
import { useState } from 'react';
import { useEffect } from 'react';
import rgbHex from 'rgb-hex';

interface BasicProps {
    incoming: any;
    outgoing: any;
    setOutgoing: any;
}

export default function Basic( { incoming, outgoing, setOutgoing }: BasicProps ) {

  const [inpValue, setInpValue] = useState('');
  
  const [questionIndex, setQuestionIndex] = useState(0);
  const [allQuestions, setAllQuestions] = useState<string[]>(["\\text{Loading}"]);

  const bgColor: number[] = [248, 251, 255];
  const greyColor: number[] = [218, 221, 225];

  const [color, setColor] = useState(rgbHex(...bgColor, '75%'));

    useEffect(() => {
        if (incoming["basic"]) {
            setAllQuestions(incoming["basic"]);
        }
    }, [incoming]);

  const handleSubmission = (value: string) => {
    setInpValue('');
    if (questionIndex < 120) {
        const updatedOutgoing = { ...outgoing };
        if (!updatedOutgoing["basic"]) {
            updatedOutgoing["basic"] = { "answers": {} };
        } else if (!updatedOutgoing["basic"]["answers"]) {
            updatedOutgoing["basic"]["answers"] = {};
        }
        updatedOutgoing["basic"]["answers"][questionIndex] = value;
        console.log("Updated outgoing");
        console.log(updatedOutgoing);
        setOutgoing(updatedOutgoing);
        setQuestionIndex(questionIndex + 1);
        showResult(0);
    }
  }
  
  const showResult = (value: number) => {
    const rDiff = (greyColor[0] - bgColor[0]);
    const gDiff = (greyColor[1] - bgColor[1]);
    const bDiff = (greyColor[2] - bgColor[2]);
    for (let i = 0; i < 1000; i++) {
        // const factor = Math.log10((i+1) / 400)
        const factor = (i+1) / 1000
        setTimeout(() => {
            setColor(
                rgbHex(
                    greyColor[0] - rDiff * factor,
                    greyColor[1] - gDiff * factor,
                    greyColor[2] - bDiff * factor,
                    '75%'));
        }, 1);
    }

  };

return (
    <div className="w-[32vw] h-[47vh]" >
        <div style={{ backgroundColor: "#" + color }} className="rounded w-[100%] h-[100%]">
        <Center style={{ width: '100%', height: '100%' }}>
        <Stack justify="center" className="relative">
            <div className="absolute inset-0 flex items-center justify-center">
                <MathText text={allQuestions[questionIndex]} size={1.5} />
            </div>
            <div className="absolute left-[-16vw] bottom-[-23.5vh]">
                <TextInput 
                    placeholder="Answer"
                    className="w-[32vw]"
                    variant="filled"
                    value={inpValue}
                    onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSubmission(e.currentTarget.value);
                    }
                    }}
                    onChange={(e) => setInpValue(e.currentTarget.value)}
                />
            </div>
        </Stack>
        </Center>
        </div>
    </div>
  );
}
