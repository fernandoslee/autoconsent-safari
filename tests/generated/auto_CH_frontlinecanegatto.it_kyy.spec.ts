import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_frontlinecanegatto.it_kyy', ['https://frontlinecanegatto.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
