
'use client';

import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import '@mantine/core/styles.css';
import GameInterface from './gameInterface';

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



export default function Home() {

  return (
    <div style={{ overflow: 'hidden' }}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <GameInterface />
      </MantineProvider>
    </div>
  );
}
