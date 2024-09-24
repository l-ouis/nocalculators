
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import { Stack, Button, Center, NativeSelect, TextInput } from '@mantine/core';
import '@mantine/core/styles.css';
import MathText from '../rendering/mathText';
import { createElement } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { GameInfoProps } from '../gameInterface';

import Arithmetic from '../games/arithmetic';
// import MemoryComponent from '../components/MemoryComponent';
// import CardMarketComponent from '../components/CardMarketComponent';
// import DiceGameComponent from '../components/DiceGameComponent';
// import ExpectedValueComponent from '../components/ExpectedValueComponent';
import KellyCriterion from '../games/kellyCriterion';

const gameModeData = [
  {
    group: 'Basic',
    items: [
      { label: 'Arithmetic', value: 'arithmetic' },
      { label: 'Memory', value: 'memory' },
    ],
  },
  {
    group: 'Betting Games',
    items: [
      { label: 'Card Market', value: 'card_market' },
      { label: 'Dice Game', value: 'dice_game' },
    ],
  },
  {
    group: 'Specfics',
    items: [
      { label: 'Expected Value', value: 'expected_value' },
      { label: 'Kelly Criterion', value: 'kelly_criterion' },
    ],
  },
];

const gameModeComponents: { [key: string]: React.ComponentType } = {
    "arithmetic": Arithmetic,
    "memory": null,
    "card_market": null,
    "dice_game": null,
    "expected_value": null,
    "kelly_criterion": KellyCriterion,
};


export default function GameModule(props: GameInfoProps) {
    const [gameType, setGameType] = useState<string>("arithmetic");

    return (
        <div className="w-[32vw] h-[47vh]" >
            <div className="rounded bg-slate-100/75 w-[100%] h-[100%]">
              {(props.status === "lobby") &&
                <Stack className="w-[100%]" align="center">
                    <NativeSelect 
                        className="m-5"
                        data={gameModeData}
                        value={gameType}
                        onChange={(event) => setGameType(event.currentTarget.value)}
                    />
                </Stack>
              }
                <div>
                    { gameModeComponents[gameType]
                    ? createElement(gameModeComponents[gameType], props)
                    : null }
                </div>
            </div>
        </div>
    );
    }
