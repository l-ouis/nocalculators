
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Stack, Button, Center, TextInput, Badge } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from './mathText';
import { fetchData } from './api';
import { useState } from 'react';
import { useEffect } from 'react';



export default function Basic() {

  const [inpValue, setInpValue] = useState('');
  const [wrong, setWrong] = useState<string | undefined>('');

  const [badges, setBadges] = useState<number[]>([]);
  const [answers, setAnswers] = useState<string[]>([]);

  const [right, setRight] = useState(0);
  const [total, setTotal] = useState(0);
  
  const [question, setQuestion] = useState('Loading...');
  const [answer, setAnswer] = useState(-1);

  const fetchDataAsync = async () => {
    const data = await fetchData('api/question');
    setQuestion(data.question);
    setAnswer(data.answer);
  };


  // Qs should be loaded in beforehand for sure
  useEffect(() => {
    console.log(total);
    console.log("use effect");
    fetchDataAsync();
  }, [total]);

  const handleSubmission = (value: string) => {
    if (value === answer.toString()) {
      setRight(right + 1);
      setBadges([1, ...badges]);
    } else {
      showWrong(answer.toString());
      setBadges([0, ...badges]);
    }
    setAnswers([answer, ...answers]);
    setInpValue('');
    setTotal(total + 1);
  }

  // Fix this  -- have a little notification popup below the input
  const showWrong = (value: string) => {
    // setWrong(value);
    // setTimeout(() => {
    //   setWrong(undefined);
    // }, 2000);
  };

  return (
    <div className="w-[32vw] h-[48vh]" >
        <div className="rounded bg-slate-150 w-[100%] h-[100%]">
        <Center style={{ width: '100%', height: '100%' }}>
        <Stack>
            <div style={{ height: '5rem' }}>
            <MathText text={question} />
            </div>
            <div style={{ height: '5rem' }}>
            <TextInput 
                placeholder="Answer" 
                value={inpValue}
                error={wrong ? wrong : undefined}
                onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleSubmission(e.currentTarget.value);
                }
                }}
                onChange={(e) => setInpValue(e.currentTarget.value)}
            />
            <div style={{ width: '15rem' }}>
                {badges.map((badge, index) => (
                <>
                    {index < 12 && (
                    <>
                        <Badge key={index} size="sm" color={badge === 1 ? "green" : "red"} variant="filled">
                        {answers[index]}
                        </Badge> 
                        <span> </span>
                    </>
                    )}
                </>
                ))}
            </div>
            </div>
        </Stack>
        </Center>
        </div>
    </div>
  );
}
