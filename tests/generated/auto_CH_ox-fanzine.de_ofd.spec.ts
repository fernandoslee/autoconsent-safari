import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ox-fanzine.de_ofd', ['https://www.ox-fanzine.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
