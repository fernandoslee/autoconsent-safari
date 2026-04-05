import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_mercyships.nl_ttn', ['https://www.mercyships.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
