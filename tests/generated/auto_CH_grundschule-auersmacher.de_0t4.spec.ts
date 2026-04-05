import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_grundschule-auersmacher.de_0t4', ['https://www.grundschule-auersmacher.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
