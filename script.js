'use strict';

const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Complete the berthType function below.
 */
function berthType(seatNumber, rowNumber) {
    const seatMap = [
        'SUB',
        'LB',
        'MB',
        'UB',
        'LB',
        'MB',
        'UB',
        'SLB'
    ];
    const totalSeatsPerRow = 8;
    const seatIndex = (rowNumber - 1) * totalSeatsPerRow + (seatNumber - 1);
    const berth = seatMap[seatIndex % totalSeatsPerRow];
    return getBerthType(berth);
}

function getBerthType(berth) {
    switch (berth) {
        case 'SUB':
            return 'Side Upper Berth';
        case 'LB':
            return 'Lower Berth';
        case 'MB':
            return 'Middle Berth';
        case 'UB':
            return 'Upper Berth';
        case 'SLB':
            return 'Side Lower Berth';
        default:
            return 'Invalid Berth';
    }
}

function main() {
    rl.question('Enter the Seat Number: ', (seatNumber) => {
        rl.question('Enter the Row Number: ', (rowNumber) => {
            const result = berthType(parseInt(seatNumber), parseInt(rowNumber));
            console.log('Your seat is:', result);
            rl.close();
        });
    });
}

main();
