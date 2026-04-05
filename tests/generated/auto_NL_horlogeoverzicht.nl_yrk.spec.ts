import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_horlogeoverzicht.nl_yrk', ['https://horlogeoverzicht.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
