
'use client';

import { Stack, Button, Center, TextInput, Badge, Radio, Group, Checkbox, Text } from '@mantine/core';
import { Divider } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from '../rendering/mathText';
import { useState } from 'react';
import { useEffect } from 'react';
import { GameInfoProps } from '../gameInterface';
import { generateArithmeticQuestion } from './generators/genArithmetic';

export default function Arithmetic( props: GameInfoProps ) {

    const [inpValue, setInpValue] = useState('');
    
    const [questionIndex, setQuestionIndex] = useState(0);
    const [allQuestions, setAllQuestions] = useState<[string, number][]>(["\\text{Loading}", 0]);

    
    const [timeLimit, setTimeLimit] = useState(0);
    const [difficulty, setDifficulty] = useState("easy");

    const handleTimeLimitChange = (value: string) => {
        const parsedValue = parseInt(value, 10);
        if (isNaN(parsedValue) || parsedValue < 0) {
            setTimeLimit(0);
            
        } else {
            setTimeLimit(parsedValue);
        }
    };

    useEffect(() => {
        if (props.status === "playing") {
            // Reset the input value and question index when the game starts
            setInpValue('');
            setQuestionIndex(0);
            // Load questions based on difficulty
            const questions = loadQuestions(difficulty);
            setAllQuestions(questions);
        }
    }, [props.status, difficulty]);

    const loadQuestions = (difficulty: string): [string, number][] => {
        const questions: [string, number][] = [];
        for (let i = 0; i < 240; i++) {
            questions.push(generateArithmeticQuestion(difficulty));
        }
        return questions;
    };

    const checkAnswer = (answer: string) => {
        if (parseInt(answer) === allQuestions[questionIndex][1]) {
            props.setPoints(props.points + 1);
        } else {
            props.setPoints(props.points - 1);
        }
        setQuestionIndex(questionIndex + 1);
        setInpValue('');
    }

    return (
    <div className="w-[32vw] h-[47vh]" >
        <div className="rounded w-[100%] h-[100%]">
            {props.status === "lobby" ? (
                <Stack gap="md">
                    <Text>Basic arithmetic questions</Text>
                    <Divider className="w-[90%]"/>
                    <Text td="underline">Difficulty</Text>
                    <Radio.Group
                        value={difficulty}
                        onChange={setDifficulty}
                        >
                        <Group>
                            <Radio value="easy" label="Easy" />
                            <Radio value="medium" label="Medium" />
                            <Radio value="hard" label="Hard" />
                        </Group>
                    </Radio.Group>

                    <Text td="underline">Problem Time Limit</Text>
                    <Group>
                        <TextInput
                            size="xs"
                            variant="filled"
                            placeholder="Enter time limit in seconds"
                            value={timeLimit}
                            onChange={(event) => handleTimeLimitChange(event.currentTarget.value)}
                        />
                        {timeLimit === 0 ? (<Text size="sm" c="dimmed">(No time limit)</Text>) : null}
                    </Group>
                </Stack>
            )
            : props.status === "playing" ? (
                <Center style={{ width: '100%', height: '100%' }}>         
                <Stack justify="center" className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <MathText text={allQuestions[questionIndex][0]} size={1.5} />
                </div>
                <div className="absolute items-center justify-center left-[-16vw] bottom-[-10.5vh]">
                    <TextInput 
                        placeholder="Answer"
                        className="w-[90%]"
                        value={inpValue}
                        onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            checkAnswer(e.currentTarget.value);
                        }
                        }}
                        onChange={(e) => setInpValue(e.currentTarget.value)}
                    />
                </div>
                </Stack>
                </Center>
            )
            : props.status === "done" ? (
                <div>Done</div>
            ) : null}
        </div>
    </div>
    );
}
