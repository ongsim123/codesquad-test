function moveF(ret) {
    let Fret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Fret[0][0].push(ret[0][2][0], ret[0][1][0], ret[0][0][0]);
    Fret[0][1].push(ret[0][2][1], ret[0][1][1], ret[0][0][1]);
    Fret[0][2].push(ret[0][2][2], ret[0][1][2], ret[0][0][2]);

    Fret[1][0].push(ret[5][0][2], ret[1][0][1], ret[1][0][2]);
    Fret[1][1].push(ret[5][0][1], ret[1][1][1], ret[1][1][2]);
    Fret[1][2].push(ret[5][0][0], ret[1][2][1], ret[1][2][2]);

    Fret[4][0].push(ret[1][2][0], ret[1][1][0], ret[1][0][0]);
    Fret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Fret[4][2].push(ret[4][2][0], ret[4][2][1], ret[4][2][2]);

    Fret[3][0].push(ret[3][0][0], ret[3][0][1], ret[4][0][0]);
    Fret[3][1].push(ret[3][1][0], ret[3][1][1], ret[4][0][1]);
    Fret[3][2].push(ret[3][2][0], ret[3][2][1], ret[4][0][2]);

    Fret[5][0].push(ret[3][0][2], ret[3][1][2], ret[3][2][2]);
    Fret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Fret[5][2].push(ret[5][2][0], ret[5][2][1], ret[5][2][2]);

    Fret[2][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Fret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Fret[2][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    return Fret
}

function moveB(ret) {
    let Bret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Bret[2][0].push(ret[2][2][0], ret[2][1][0], ret[2][0][0]);
    Bret[2][1].push(ret[2][2][1], ret[2][1][1], ret[2][0][1]);
    Bret[2][2].push(ret[2][2][2], ret[2][1][2], ret[2][0][2]);

    Bret[3][0].push(ret[5][2][0], ret[3][0][1], ret[3][0][2]);
    Bret[3][1].push(ret[5][2][1], ret[3][1][1], ret[3][1][2]);
    Bret[3][2].push(ret[5][2][2], ret[3][2][1], ret[3][2][2]);

    Bret[4][0].push(ret[4][0][0], ret[4][0][1], ret[4][0][2]);
    Bret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Bret[4][2].push(ret[3][0][0], ret[3][1][0], ret[3][2][0]);

    Bret[1][0].push(ret[1][0][0], ret[1][0][1], ret[4][2][2]);
    Bret[1][1].push(ret[1][1][0], ret[1][1][1], ret[4][2][1]);
    Bret[1][2].push(ret[1][2][0], ret[1][2][1], ret[4][2][0]);

    Bret[5][0].push(ret[5][0][0], ret[5][0][1], ret[5][0][2]);
    Bret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Bret[5][2].push(ret[1][2][2], ret[1][1][2], ret[1][0][2]);

    Bret[0][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Bret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Bret[0][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    return Bret
}

function moveR(ret) {
    let Rret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Rret[1][0].push(ret[1][2][0], ret[1][1][0], ret[1][0][0]);
    Rret[1][1].push(ret[1][2][1], ret[1][1][1], ret[1][0][1]);
    Rret[1][2].push(ret[1][2][2], ret[1][1][2], ret[1][0][2]);

    Rret[2][0].push(ret[5][0][0], ret[2][0][1], ret[2][0][2]);
    Rret[2][1].push(ret[5][1][0], ret[2][1][1], ret[2][1][2]);
    Rret[2][2].push(ret[5][2][0], ret[2][2][1], ret[2][2][2]);

    Rret[4][0].push(ret[4][0][0], ret[4][0][1], ret[2][2][0]);
    Rret[4][1].push(ret[4][1][0], ret[4][1][1], ret[2][1][0]);
    Rret[4][2].push(ret[4][2][0], ret[4][2][1], ret[2][2][0]);

    Rret[0][0].push(ret[0][0][0], ret[0][0][1], ret[4][0][2]);
    Rret[0][1].push(ret[0][1][0], ret[0][1][1], ret[4][1][2]);
    Rret[0][2].push(ret[0][2][0], ret[0][2][1], ret[4][2][2]);

    Rret[5][0].push(ret[0][2][2], ret[5][0][1], ret[5][0][2]);
    Rret[5][1].push(ret[0][1][2], ret[5][1][1], ret[5][1][2]);
    Rret[5][2].push(ret[0][2][2], ret[5][2][1], ret[5][2][2]);

    Rret[3][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Rret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Rret[3][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    return Rret
}

function moveL(ret) {
    let Lret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];

    Lret[3][0].push(ret[3][2][0], ret[3][1][0], ret[3][0][0]);
    Lret[3][1].push(ret[3][2][1], ret[3][1][1], ret[3][0][1]);
    Lret[3][2].push(ret[3][2][2], ret[3][1][2], ret[3][0][2]);

    Lret[0][0].push(ret[5][2][2], ret[0][0][1], ret[0][0][2]);
    Lret[0][1].push(ret[5][1][2], ret[0][1][1], ret[0][1][2]);
    Lret[0][2].push(ret[5][0][2], ret[0][2][1], ret[0][2][2]);

    Lret[4][0].push(ret[0][0][0], ret[4][0][1], ret[4][0][2]);
    Lret[4][1].push(ret[0][1][0], ret[4][1][1], ret[4][1][2]);
    Lret[4][2].push(ret[0][2][0], ret[4][2][1], ret[4][2][2]);

    Lret[2][0].push(ret[2][0][0], ret[2][0][1], ret[4][2][0]);
    Lret[2][1].push(ret[2][1][0], ret[2][1][1], ret[4][1][0]);
    Lret[2][2].push(ret[2][2][0], ret[2][2][1], ret[4][0][0]);

    Lret[5][0].push(ret[5][0][0], ret[5][0][1], ret[2][0][2]);
    Lret[5][1].push(ret[5][1][0], ret[5][1][1], ret[2][1][2]);
    Lret[5][2].push(ret[5][2][0], ret[5][2][1], ret[2][2][2]);

    Lret[1][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Lret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Lret[1][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    return Lret
}

function moveU(ret) {
    let Uret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Uret[5][0].push(ret[5][2][0], ret[5][1][0], ret[5][0][0]);
    Uret[5][1].push(ret[5][2][1], ret[5][1][1], ret[5][0][1]);
    Uret[5][2].push(ret[5][2][2], ret[5][1][2], ret[5][0][2]);

    Uret[3][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Uret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Uret[3][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    Uret[2][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Uret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Uret[2][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    Uret[1][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Uret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Uret[1][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    Uret[0][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Uret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Uret[0][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    Uret[4][0].push(ret[4][0][0], ret[4][0][1], ret[4][0][2]);
    Uret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Uret[4][2].push(ret[4][2][0], ret[4][2][1], ret[4][2][2]);

    return Uret
}

function moveD(ret) {
    let Dret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Dret[4][0].push(ret[4][2][0], ret[4][1][0], ret[4][0][0]);
    Dret[4][1].push(ret[4][2][1], ret[4][1][1], ret[4][0][1]);
    Dret[4][2].push(ret[4][2][2], ret[4][1][2], ret[4][0][2]);

    Dret[1][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Dret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Dret[1][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    Dret[2][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Dret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Dret[2][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    Dret[3][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Dret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Dret[3][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    Dret[0][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Dret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Dret[0][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    Dret[5][0].push(ret[5][0][0], ret[5][0][1], ret[5][0][2]);
    Dret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Dret[5][2].push(ret[5][2][0], ret[5][2][1], ret[5][2][2]);

    return Dret
}

function moveF2(ret) {
    let Fret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Fret[0][0].push(ret[0][0][2], ret[0][1][2], ret[0][2][2]);
    Fret[0][1].push(ret[0][0][1], ret[0][1][1], ret[0][2][1]);
    Fret[0][2].push(ret[0][0][0], ret[0][1][0], ret[0][2][0]);

    Fret[1][0].push(ret[4][0][2], ret[1][0][1], ret[1][0][2]);
    Fret[1][1].push(ret[4][0][1], ret[1][1][1], ret[1][1][2]);
    Fret[1][2].push(ret[4][0][0], ret[1][2][1], ret[1][2][2]);

    Fret[4][0].push(ret[3][0][2], ret[3][1][2], ret[3][2][2]);
    Fret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Fret[4][2].push(ret[4][2][0], ret[4][2][1], ret[4][2][2]);

    Fret[3][0].push(ret[3][0][0], ret[3][0][1], ret[5][0][0]);
    Fret[3][1].push(ret[3][1][0], ret[3][1][1], ret[5][0][1]);
    Fret[3][2].push(ret[3][2][0], ret[3][2][1], ret[5][0][2]);

    Fret[5][0].push(ret[1][2][0], ret[1][1][0], ret[1][0][0]);
    Fret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Fret[5][2].push(ret[5][2][0], ret[5][2][1], ret[5][2][2]);

    Fret[2][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Fret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Fret[2][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    return Fret
}

function moveB2(ret) {
    let Bret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Bret[2][0].push(ret[2][0][2], ret[2][1][2], ret[2][2][2]);
    Bret[2][1].push(ret[2][0][1], ret[2][1][1], ret[2][2][1]);
    Bret[2][2].push(ret[2][0][0], ret[2][1][0], ret[2][2][0]);

    Bret[3][0].push(ret[4][2][0], ret[3][0][1], ret[3][0][2]);
    Bret[3][1].push(ret[4][2][1], ret[3][1][1], ret[3][1][2]);
    Bret[3][2].push(ret[4][2][2], ret[3][2][1], ret[3][2][2]);

    Bret[4][0].push(ret[4][0][0], ret[4][0][1], ret[4][0][2]);
    Bret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Bret[4][2].push(ret[1][2][2], ret[1][1][2], ret[1][0][2]);

    Bret[1][0].push(ret[1][0][0], ret[1][0][1], ret[5][2][2]);
    Bret[1][1].push(ret[1][1][0], ret[1][1][1], ret[5][2][1]);
    Bret[1][2].push(ret[1][2][0], ret[1][2][1], ret[5][2][0]);

    Bret[5][0].push(ret[5][0][0], ret[5][0][1], ret[5][0][2]);
    Bret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Bret[5][2].push(ret[3][0][0], ret[3][1][0], ret[3][2][0]);

    Bret[0][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Bret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Bret[0][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    return Bret
}

function moveR2(ret) {
    let Rret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Rret[1][0].push(ret[1][0][2], ret[1][1][2], ret[1][2][2]);
    Rret[1][1].push(ret[1][0][1], ret[1][1][1], ret[1][2][1]);
    Rret[1][2].push(ret[1][0][0], ret[1][1][0], ret[1][2][0]);

    Rret[2][0].push(ret[4][2][2], ret[2][0][1], ret[2][0][2]);
    Rret[2][1].push(ret[4][1][2], ret[2][1][1], ret[2][1][2]);
    Rret[2][2].push(ret[4][0][2], ret[2][2][1], ret[2][2][2]);

    Rret[4][0].push(ret[4][0][0], ret[4][0][1], ret[0][0][2]);
    Rret[4][1].push(ret[4][1][0], ret[4][1][1], ret[0][1][2]);
    Rret[4][2].push(ret[4][2][0], ret[4][2][1], ret[0][2][2]);

    Rret[0][0].push(ret[0][0][0], ret[0][0][1], ret[5][2][0]);
    Rret[0][1].push(ret[0][1][0], ret[0][1][1], ret[5][1][0]);
    Rret[0][2].push(ret[0][2][0], ret[0][2][1], ret[5][0][0]);

    Rret[5][0].push(ret[2][0][0], ret[5][0][1], ret[5][0][2]);
    Rret[5][1].push(ret[2][1][0], ret[5][1][1], ret[5][1][2]);
    Rret[5][2].push(ret[2][2][0], ret[5][2][1], ret[5][2][2]);

    Rret[3][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Rret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Rret[3][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    return Rret
}

function moveL2(ret) {
    let Lret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Lret[3][0].push(ret[3][0][2], ret[3][1][2], ret[3][2][2]);
    Lret[3][1].push(ret[3][0][1], ret[3][1][1], ret[3][2][1]);
    Lret[3][2].push(ret[3][0][0], ret[3][1][0], ret[3][2][0]);

    Lret[0][0].push(ret[4][0][0], ret[0][0][1], ret[0][0][2]);
    Lret[0][1].push(ret[4][1][0], ret[0][1][1], ret[0][1][2]);
    Lret[0][2].push(ret[4][2][0], ret[0][2][1], ret[0][2][2]);

    Lret[4][0].push(ret[2][2][2], ret[4][0][1], ret[4][0][2]);
    Lret[4][1].push(ret[2][1][2], ret[4][1][1], ret[4][1][2]);
    Lret[4][2].push(ret[2][0][2], ret[4][2][1], ret[4][2][2]);

    Lret[2][0].push(ret[2][0][0], ret[2][0][1], ret[5][0][2]);
    Lret[2][1].push(ret[2][1][0], ret[2][1][1], ret[5][1][2]);
    Lret[2][2].push(ret[2][2][0], ret[2][2][1], ret[5][2][2]);

    Lret[5][0].push(ret[5][0][0], ret[5][0][1], ret[0][2][0]);
    Lret[5][1].push(ret[5][1][0], ret[5][1][1], ret[0][1][0]);
    Lret[5][2].push(ret[5][2][0], ret[5][2][1], ret[0][0][0]);

    Lret[1][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Lret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Lret[1][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    return Lret
}

function moveU2(ret) {
    let Uret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Uret[5][0].push(ret[5][0][2], ret[5][1][2], ret[5][2][2]);
    Uret[5][1].push(ret[5][0][1], ret[5][1][1], ret[5][2][1]);
    Uret[5][2].push(ret[5][0][0], ret[5][1][0], ret[5][2][0]);

    Uret[3][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Uret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Uret[3][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    Uret[2][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Uret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Uret[2][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    Uret[1][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Uret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Uret[1][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    Uret[0][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Uret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Uret[0][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    Uret[4][0].push(ret[4][0][0], ret[4][0][1], ret[4][0][2]);
    Uret[4][1].push(ret[4][1][0], ret[4][1][1], ret[4][1][2]);
    Uret[4][2].push(ret[4][2][0], ret[4][2][1], ret[4][2][2]);

    return Uret
}

function moveD2(ret) {
    let Dret = [[[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []], [[], [], []]];
    Dret[4][0].push(ret[4][0][2], ret[4][1][2], ret[4][2][2]);
    Dret[4][1].push(ret[4][0][1], ret[4][1][1], ret[4][2][1]);
    Dret[4][2].push(ret[4][0][0], ret[4][1][0], ret[4][2][0]);

    Dret[1][0].push(ret[1][0][0], ret[1][0][1], ret[1][0][2]);
    Dret[1][1].push(ret[1][1][0], ret[1][1][1], ret[1][1][2]);
    Dret[1][2].push(ret[2][2][0], ret[2][2][1], ret[2][2][2]);

    Dret[2][0].push(ret[2][0][0], ret[2][0][1], ret[2][0][2]);
    Dret[2][1].push(ret[2][1][0], ret[2][1][1], ret[2][1][2]);
    Dret[2][2].push(ret[3][2][0], ret[3][2][1], ret[3][2][2]);

    Dret[3][0].push(ret[3][0][0], ret[3][0][1], ret[3][0][2]);
    Dret[3][1].push(ret[3][1][0], ret[3][1][1], ret[3][1][2]);
    Dret[3][2].push(ret[0][2][0], ret[0][2][1], ret[0][2][2]);

    Dret[0][0].push(ret[0][0][0], ret[0][0][1], ret[0][0][2]);
    Dret[0][1].push(ret[0][1][0], ret[0][1][1], ret[0][1][2]);
    Dret[0][2].push(ret[1][2][0], ret[1][2][1], ret[1][2][2]);

    Dret[5][0].push(ret[5][0][0], ret[5][0][1], ret[5][0][2]);
    Dret[5][1].push(ret[5][1][0], ret[5][1][1], ret[5][1][2]);
    Dret[5][2].push(ret[5][2][0], ret[5][2][1], ret[5][2][2]);

    return Dret
}

function answer(ret) {
    let answer = `
    <p>${ret[5][0].join(' ')}<br>${ret[5][1].join(' ')}<br>${ret[5][2].join(' ')}</p>
    ${ret[0][0].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[1][0].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[2][0].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[3][0].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

    ${ret[0][1].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[1][1].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[2][1].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[3][1].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

    ${ret[0][2].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[1][2].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[2][2].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
    ${ret[3][2].join(' ')}&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<br>

    <p>${ret[4][0].join(' ')}<br>${ret[4][1].join(' ')}<br>${ret[4][2].join(' ')}</p>
    `;

    return answer
}

function main() {
    const userInput = document.getElementById('userInput');
    const result = document.getElementById('result');
    const move = document.getElementById('move').value.toUpperCase();
    //1차원
    const firstWhite = ["W", "W", "W"], firstOrange = ["O", "O", "O"], firstYellow = ["Y", "Y", "Y"]
        , firstRed = ["R", "R", "R"], firstBlue = ["B", "B", "B"], firstGreen = ["G", "G", "G"];
    //2차원
    const white = [firstWhite, firstWhite, firstWhite];
    const orange = [firstOrange, firstOrange, firstOrange];
    const yellow = [firstYellow, firstYellow, firstYellow];
    const red = [firstRed, firstRed, firstRed];
    const blue = [firstBlue, firstBlue, firstBlue];
    const green = [firstGreen, firstGreen, firstGreen];
    //3차원
    const cube = [white, orange, yellow, red, blue, green];

    userInput.innerHTML = `CUBE> ${move}`; // CUBE MOVE 출력 단

    let str = ''; // 결과값 문자열 변수 지정
    let ret = cube; // 초기값 cube 초기상태 지정
    let cnt = 0; // 조작횟수 변수 지정

    for (let i = 0; i < move.length; i++) { // move 배열 루프문
        if (move[i] === 'Q') { // Quit
            str += `-${move[i]}-<p>조작갯수 : ${cnt}</p><p>이용해주셔서 감사합니다. 뚜뚜뚜.</p>`;
            result.innerHTML = str; // break하면 for문 마지막 str에 추가 안되기 때문에 추가
            break;
        }
        else if (move[i + 1] === "'") {// 반시계동작
            if (Number(move[i + 2]) === Number(move[i + 2])) { //반시계후 숫자
                if (move[i] === "F") { // F'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveF2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "B") { // B'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveB2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "R") { // R'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveR2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "L") { // L'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveL2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "U") { // U'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveU2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                else if (move[i] === "D") { // D'횟수
                    let j = 0;
                    while (j < Number(move[i + 2])) {
                        j++;
                        cnt++;
                        ret = moveD2(ret);
                        str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                    }
                }
                i + 2;
            }
            else { //반시계후 알파벳 or 공백
                if (move[i] === "F") { // F'
                    ret = moveF2(ret);
                }
                else if (move[i] === "B") { // B'
                    ret = moveB2(ret);
                }
                else if (move[i] === "R") { // R'
                    ret = moveR2(ret);
                }
                else if (move[i] === "L") { // L'
                    ret = moveL2(ret);
                }
                else if (move[i] === "U") { // U'
                    ret = moveU2(ret);
                }
                else if (move[i] === "D") { // D'
                    ret = moveD2(ret);
                }
                str += `-${move[i] + move[i + 1]}-<p>${answer(ret)}</p>`;
                i++;
                cnt++;
            }

        }
        else if (Number(move[i + 1]) === Number(move[i + 1])) { // 시계다중동작
            if (move[i] === "F") { // F
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveF(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "B") { // B
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveB(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "R") { // R
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveR(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "L") { // L
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveL(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "U") { // U
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveU(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            else if (move[i] === "D") { // D
                let j = 0;
                while (j < Number(move[i + 1])) {
                    j++;
                    cnt++;
                    ret = moveD(ret);
                    str += `-${move[i]}-<p>${answer(ret)}</p>`;
                }
            }
            i++;
        }
        else if (move[i] === "F" || move[i] === "B" || move[i] === "R" || move[i] === "L" || move[i] === "U" || move[i] === "D") { // 시계동작
            if (move[i] === "F") { // F
                ret = moveF(ret);
            }
            else if (move[i] === "B") { // B
                ret = moveB(ret);
            }
            else if (move[i] === "R") { // R
                ret = moveR(ret);
            }
            else if (move[i] === "L") { // L
                ret = moveL(ret);
            }
            else if (move[i] === "U") { // U
                ret = moveU(ret);
            }
            else if (move[i] === "D") { // D
                ret = moveD(ret);
            }
            str += `-${move[i]}-<p>${answer(ret)}</p>`;
            cnt++;
        }
        else { // 입력 오류
            alert('입력 오류. 횟수가 1~9인지, 정확한 동작을 입력하였는지 재확인이 필요합니다.');
            userInput.innerHTML = `CUBE> 입력 오류!`;
            break;
        }
        result.innerHTML = str;
    }
}
main();