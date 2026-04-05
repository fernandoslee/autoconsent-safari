import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_christuskirche-stuttgart.de_nt0', ['https://www.christuskirche-stuttgart.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
