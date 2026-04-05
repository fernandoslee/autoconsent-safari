import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_leggett-immo.com_8yc', ['https://www.leggett-immo.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
