import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_heimkinoraum.de_1vp', ['https://www.heimkinoraum.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
