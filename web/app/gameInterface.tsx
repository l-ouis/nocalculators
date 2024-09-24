
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Stack, Button, Center, TextInput, Badge, Group } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from './rendering/mathText';
import { useState } from 'react';
import { useEffect } from 'react';
import Menu from './display/menu';
import GameModule from './display/gameModule';



export interface GameInfoProps {
    points: number;
    setPoints: (points: number) => void;
    time: number;
    status: string; // lobby, playing, done
}


export default function GameInterface() {

    const [points, setPoints] = useState(0);
    const [time, setTime] = useState(0);
    const [gameStatus, setGameStatus] = useState("lobby");

    const startGame = () => {
        setPoints(0);
        setTime(180);
        setGameStatus("playing");
    };

    const endGame = () => {
        setGameStatus("done");
        setTime(0);
    }

    const resetGame = () => {
        setPoints(0);
        setTime(0);
        setGameStatus("lobby");
    };

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameStatus === "playing" && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (gameStatus === "playing" && time === 0) {
            setGameStatus("done");
        }

        return () => clearInterval(timer);
    }, [gameStatus, time]);

    return (
        <Center className="w-[100vw] h-[100vh]">
            <Group>
            <Stack>
            <Group>
                <GameModule points={points} setPoints={setPoints} time={time} status={gameStatus}/>
                <GameModule points={points} setPoints={setPoints} time={time} status={gameStatus}/>
            </Group>
            <Group>
                <GameModule points={points} setPoints={setPoints} time={time} status={gameStatus}/>
                <GameModule points={points} setPoints={setPoints} time={time} status={gameStatus}/>
            </Group>
            </Stack>
            <Menu 
                startGame={startGame}
                endGame={endGame}
                resetGame={resetGame}
                status={gameStatus}
                time={time}
                points={points}
                />
            </Group>
        </Center>
    );
}
