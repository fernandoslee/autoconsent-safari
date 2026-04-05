import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pizzeria-rossini.ch_3rm', ['https://pizzeria-rossini.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
