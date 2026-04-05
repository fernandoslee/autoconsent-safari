import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cinelandia.it_mlt', ['https://www.cinelandia.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
