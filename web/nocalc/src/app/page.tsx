
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Stack, Button, Center, TextInput, Badge, Group } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from './mathText';
import { fetchData } from './api';
import { useState } from 'react';
import { useEffect } from 'react';
import Basic from './basic';
import Menu from './menu';
import MiscDisplay from './miscDisplay';

const def: MantineColorsTuple = [
  '#f3f3ff',
  '#e2e6ee',
  '#c6cbd4',
  '#a9afbb',
  '#8f96a5',
  '#7f8798',
  '#767f93',
  '#636d80',
  '#576175',
  '#475369'
];

const theme = createTheme({
  fontFamily: 'Roboto Slab, serif',
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: { fontFamily: 'Georgia, serif' },
  colors: {
    def,
  }
});



{/*
<MathText text="3 + 3 + \frac{2}{335}" />
*/}

export default function Home() {

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
    <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
      {/* center + align all of this stuff in conditionals */}
      <Center className="w-[100vw] h-[100vh]">
        <Group>
          <Stack>
            <Group>
              <Basic />
              <Basic />
            </Group>
            <Group>
              <Basic /> 
              <Basic />
            </Group>
          </Stack>
          <Stack>
            <MiscDisplay />
            <Menu />
          </Stack>
        </Group>
      </Center>
    </MantineProvider>
  );
}
