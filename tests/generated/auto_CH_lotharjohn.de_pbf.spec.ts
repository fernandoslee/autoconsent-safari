import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lotharjohn.de_pbf', ['https://www.lotharjohn.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
