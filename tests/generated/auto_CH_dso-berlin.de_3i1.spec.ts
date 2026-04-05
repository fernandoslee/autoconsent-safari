import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_dso-berlin.de_3i1', ['https://www.dso-berlin.de/de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
