
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function generateArithmeticQuestion(difficulty: string): [string, number] {

    const generators = [  generateAdditionQuestion, generateSubtractionQuestion,
                        generateMultiplicationQuestion, generateDivisionQuestion];

    const randomIndex = getRandomInt(0, generators.length - 1);
    return generators[randomIndex](difficulty);
}

export function generateAdditionQuestion(difficulty: string): [string, number] {
    let num1: number, num2: number;

    switch (difficulty) {
        case 'easy':
            num1 = getRandomInt(1, 20);
            num2 = getRandomInt(1, 20);
            break;
        case 'medium':
            num1 = getRandomInt(10, 200);
            num2 = getRandomInt(10, 200);
            break;
        case 'hard':
            num1 = getRandomInt(50, 2000);
            num2 = getRandomInt(50, 2000);
            break;
        default:
            throw new Error('Invalid difficulty level');
    }

    const answer = num1 + num2;
    return [`${num1} + ${num2}`, answer];
}

export function generateSubtractionQuestion(difficulty: string): [string, number] {
    let num1: number, num2: number;

    switch (difficulty) {
        case 'easy':
            num1 = getRandomInt(1, 20);
            num2 = getRandomInt(1, 20);
            break;
        case 'medium':
            num1 = getRandomInt(10, 200);
            num2 = getRandomInt(10, 200);
            break;
        case 'hard':
            num1 = getRandomInt(50, 2000);
            num2 = getRandomInt(50, 2000);
            break;
        default:
            throw new Error('Invalid difficulty level');
    }

    const answer = num1 - num2;
    return [`${num1} - ${num2}`, answer];
}

export function generateMultiplicationQuestion(difficulty: string): [string, number] {
    let num1: number, num2: number;

    switch (difficulty) {
        case 'easy':
            num1 = getRandomInt(1, 15);
            num2 = getRandomInt(1, 15);
            break;
        case 'medium':
            num1 = getRandomInt(2, 20);
            num2 = getRandomInt(2, 50);
            break;
        case 'hard':
            num1 = getRandomInt(11, 100);
            num2 = getRandomInt(11, 100);
            break;
        default:
            throw new Error('Invalid difficulty level');
    }

    const answer = num1 * num2;
    return [`${num1} * ${num2}`, answer];
}

export function generateDivisionQuestion(difficulty: string): [string, number] {
    let num1: number, num2: number;

    switch (difficulty) {
        case 'easy':
            num1 = getRandomInt(1, 15);
            num2 = getRandomInt(1, 15);
            break;
        case 'medium':
            num1 = getRandomInt(2, 20);
            num2 = getRandomInt(2, 50);
            break;
        case 'hard':
            num1 = getRandomInt(11, 100);
            num2 = getRandomInt(11, 100);
            break;
        default:
            throw new Error('Invalid difficulty level');
    }

    const product = num1 * num2;
    const answer = num2
    return [`${product} \\div ${num1}`, answer];
}

