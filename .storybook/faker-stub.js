// Lightweight faker stand-in for Storybook / Linaria evaluation.
// Real @faker-js/faker v10 is ESM-only and blows up in wyw-in-js's Node VM.

const firstNames = ["Ada", "Grace", "Alan", "Katherine", "Donald", "Barbara"];
const lastNames = ["Lovelace", "Hopper", "Turing", "Johnson", "Knuth", "Liskov"];
const cities = ["Cambridge", "Palo Alto", "Zurich", "Kyoto", "Lisbon", "Austin"];
const words = ["alpha", "bravo", "charlie", "delta", "echo", "foxtrot", "golf", "hotel"];

let seed = 1337;

function next() {
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed;
}

function pick(list) {
    return list[next() % list.length];
}

function int(max = 100) {
    const limit = typeof max === "number" ? max : max?.max ?? 100;
    return next() % (Math.floor(limit) + 1);
}

export const faker = {
    seed(n) {
        seed = n >>> 0;
    },
    person: {
        firstName: () => pick(firstNames),
        lastName: () => pick(lastNames),
        jobTitle: () => `${pick(["Senior", "Staff", "Principal"])} ${pick(["Engineer", "Designer", "Analyst"])}`,
    },
    internet: {
        email: () => `${pick(firstNames).toLowerCase()}.${pick(lastNames).toLowerCase()}@example.com`,
        url: () => `https://example.com/${pick(words)}`,
    },
    location: {
        city: () => pick(cities),
    },
    lorem: {
        word: () => pick(words),
        words: (count = 3) => Array.from({ length: count }, () => pick(words)).join(" "),
        sentence: (wordCount = 8) => {
            const text = Array.from({ length: wordCount }, () => pick(words)).join(" ");
            return text.charAt(0).toUpperCase() + text.slice(1) + ".";
        },
    },
    number: {
        int: (max) => int(max),
    },
    string: {
        uuid: () =>
            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, c => {
                const r = next() & 15;
                const v = c === "x" ? r : (r & 0x3) | 0x8;
                return v.toString(16);
            }),
    },
    finance: {
        bitcoinAddress: () => `1${Array.from({ length: 30 }, () => pick("ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz123456789".split(""))).join("")}`,
    },
    image: {
        urlLoremFlickr: ({ category = "animals", width = 40, height = 40 } = {}) =>
            `https://loremflickr.com/${width}/${height}/${category}`,
    },
};
