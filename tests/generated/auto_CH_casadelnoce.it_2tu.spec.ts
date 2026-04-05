import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casadelnoce.it_2tu', ['https://www.casadelnoce.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
