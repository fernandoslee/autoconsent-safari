import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_siebdruckland.de_nhz', ['https://www.siebdruckland.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
