import { Center, Button, Stack, Text, Divider, Progress } from '@mantine/core';
import { GameInfoProps } from '../gameInterface';
import { useState, useEffect } from 'react';

interface MenuProps {
    startGame: (data) => void;
    endGame: (data) => void;
    resetGame: (data) => void;
    status: string;
    time: number;
    points: number;
}

export default function Menu(props: MenuProps) {

    return (
        <div className="w-[32vw] h-[95.8vh]">
            <div className="rounded bg-slate-100/75 w-[100%] h-[100%]">
                <Stack className="p-5" align="left">
                    <div>
                        <Text>nocalculators.com</Text>
                        <Text c="dimmed">a mental math companion</Text>
                        <Text c="dimmed">
                            <a href="https://github.com/l-ouis/nocalculators" target="_blank" rel="noopener noreferrer">Github</a>
                        </Text>
                        <Divider my="sm" />
                    </div>
                    {props.status === 'lobby' && <Button onClick={props.startGame}>Start Game</Button>}
                    {props.status === 'playing' && (
                        <>
                        <Center className="w-[100%]">
                            <Stack className="w-[100%]">
                            <Button onClick={props.endGame}>End Game</Button>
                            <Progress 
                                value={(props.time / 180) * 100}
                                size="xl"
                                radius="xl"
                                striped animated
                                transitionDuration={1000}
                                />
                            <Text>Points: {props.points} </Text>
                            </Stack>
                        </Center>
                        </>
                    )}
                    {props.status === 'done' && <Button onClick={props.resetGame}>Restart</Button>}
                </Stack>
            </div>
        </div>
    );
}