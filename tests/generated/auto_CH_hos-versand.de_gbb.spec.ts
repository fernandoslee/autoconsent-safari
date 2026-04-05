import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_hos-versand.de_gbb', ['https://www.hos-versand.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
