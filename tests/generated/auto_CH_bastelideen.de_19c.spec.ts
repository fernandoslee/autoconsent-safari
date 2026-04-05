import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bastelideen.de_19c', ['https://www.bastelideen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
