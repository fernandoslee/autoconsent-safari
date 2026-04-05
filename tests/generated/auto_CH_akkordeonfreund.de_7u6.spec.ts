import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_akkordeonfreund.de_7u6', ['https://www.akkordeonfreund.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
