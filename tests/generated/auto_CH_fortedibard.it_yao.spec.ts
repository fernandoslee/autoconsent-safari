import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fortedibard.it_yao', ['https://www.fortedibard.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
