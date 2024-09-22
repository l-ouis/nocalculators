import { Center, Button, Stack } from '@mantine/core';
import { useState, useEffect } from 'react';

interface MenuProps {
    onStartGame: (data) => void;
}

export default function Menu({ onStartGame }: MenuProps) {

    return (
        <div className="w-[32vw] h-[32vh]">
            <div className="rounded bg-slate-50/75 w-[100%] h-[100%]">
                <Center className="py-[5rem]">
                    <Stack>
                        <div>Stuff goes here</div>
                        <div>Stuff goes here</div>
                        <div>Stuff goes here</div>
                    </Stack>
                </Center>
            </div>
        </div>
    );
}