import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_brokkingbanket.nl_4pr', ['https://www.brokkingbanket.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
