const a = {
    interval: 80,
    frames: [
        "-----------",
        "-_---------",
        "-_-_-------",
        "-_-_-_-----",
        "-_-_-_-_---",
        "-_-_-_-_-_-",
        "__-_-_-_-_-",
        "____-_-_-_-",
        "______-_-_-",
        "________-_-",
        "__________-",
        "___________",
        "___________",
        "___________",
        "___________",
        "_-_________",
        "_-_-_______",
        "_-_-_-_____",
        "_-_-_-_-___",
        "_-_-_-_-_-_",
        "--_-_-_-_-_",
        "----_-_-_-_",
        "------_-_-_",
        "--------_-_",
        "----------_",
        "-----------",
        "-----------",
        "-----------",
        "-----------",
    ]
}

const b = {
    interval: 80,
    frames: [
        "l      ",
        "lo     ",
        "loa    ",
        "load   ",
        "loadi  ",
        "loadin ",
        "loading",
        "loading",
        "Loading",
        "lOading",
        "loAding",
        "loaDing",
        "loadIng",
        "loadiNg",
        "loadinG",
        "loading",
        "Loading",
        "LOading",
        "LOAding",
        "LOADing",
        "LOADIng",
        "LOADINg",
        "LOADING",
        "LOADING",
        "LOADIN ",
        "LOADI  ",
        "LOAD   ",
        "LOA    ",
        "LO     ",
        "L      ",
        "       ",
        "       ",
    ]
}



const c = {
    interval: 80,
    frames: [
        "c                  ",
        "co                 ",
        "con                ",
        "cons               ",
        "conso              ",
        "consol             ",
        "console            ",
        "console.           ",
        "console.l          ",
        "console.lp         ",
        "console.lpg        ",
        "console.lpg(       ",
        `console.lpg("      `,
        `console.lpg("t     `,
        `console.lpg("t     `,
        `console.lpg("t     `,
        `console.lpg("      `,
        `console.lpg(       `,
        "console.lpg        ",
        "console.lp         ",
        "console.l          ",
        "console.lo         ",
        "console.log        ",
        "console.log(       ",
        `console.log("t     `,
        `console.log("te    `,
        `console.log("tes   `,
        `console.log("test  `,
        `console.log("test" `,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        `console.log("test")`,
        "                   ",
        "                   ",
        `n                  `,
        "no                 ",
        "nod                ",
        "node               ",
        "node               ",
        "node i             ",
        "node in            ",
        "node ind           ",
        "node inde          ",
        "node index         ",
        "node index.        ",
        "node index.j       ",
        "node index.js      ",
        "node index.js      ",
        "node index.js      ",
        "node index.js      ",
        "                   ",
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        `\x1b[0mtest               `,
        "                   ",
        `console.log("test" `,
        `console.log("test  `,
        `console.log("tes   `,
        `console.log("te    `,
        `console.log("t     `,
        `console.log("      `,
        "console.log(       ",
        "console.log        ",
        "console.lo         ",
        "console.l          ",
        "console.           ",
        "console            ",
        "consol             ",
        "conso              ",
        "cons               ",
        "con                ",
        "co                 ",
        "c                  ",
        "                   ",
        "                   "
    ],
    color: 'green'
}

const d = {
    interval: 80,
    frames: [
        '    ⠋   ',
        '    ⠙   ',
        '    ⠹   ',
        '    ⠸   ',
        '    ⠼   ',
        '    ⠴   ',
        '    ⠦   ',
        '    ⠧   ',
        '    ⠇   ',
        '    ⠏  L',
        '   ⠋  LO',
        '  ⠙  LOA',
        ' ⠹  LOAD',
        '⠸  LOADI',
        '  LOADIN',
        ' LOADING',
        'LOADING ',
        'LOADING ',
        'LOADING ',
        'OADING  ',
        'ADING   ',
        "DING    ",
        'ING     ',
        'NG      ',
        'G     ⠋ ',
        '     ⠙  ',
        '    ⠹   ',
        '    ⠼   ',
        '    ⠴   ',
        '    ⠦   ',
        '    ⠧   ',
        '    ⠇   ',
        '    ⠏   '
    ]
}

const generate = (text = "Loading",spaces = 10, interval = 80, pauses = 4) => {
    let frames = [];
    for (let i = 0; i < spaces; i++) {
        let z=" ".repeat(spaces-(i+1));
        frames.push(z+text.substr(0,i+1));
    }
    for (let i = 1; i < text.length; i++) {
        frames.push(text.substr(i, spaces));
    }
    for (let i = 0; i < frames.length; i++) {
        if (frames[i].length < spaces) {
            let frame = frames[i];
            for (let ii = frame.length; ii < spaces; ii++) {
                frame+=" ";
            }
            frames[i] = frame;
        }
    }
    for (let i = 0; i < pauses; i++) {
        frames.push(" ".repeat(spaces));
    }
    for (let i = 0; i < frames.length; i++) {
        frames[i] = frames[i]+" |"
    }
    return {
        interval,
        frames
    }
}

module.exports = {
    tirets: a,
    loading: b,
    console: c,
    loading2: d,
    generate
}