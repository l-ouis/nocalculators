
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateKellyQuestion(): [string, number] {
    const oddsWin = getRandomInt(1, 48) * 0.25; 
    const oddsLose = 1
    const winChance = parseFloat((Math.random()).toFixed(2));
    const bankroll = getRandomInt(1, 10) * 100;

    let answer = (winChance) - (1 - winChance)/(oddsWin / oddsLose);
    answer *= bankroll;
    if (answer < 0) {
        answer = 0;
    }
    if (answer > bankroll) {
        answer = bankroll;
    }

    return [`\\text{{Odds}}: ${oddsWin} : ${oddsLose}\\\\ \\text{{Chance of winning}}: ${winChance}\\\\ \\text{{Bankroll}}: ${bankroll}`, answer];
}
