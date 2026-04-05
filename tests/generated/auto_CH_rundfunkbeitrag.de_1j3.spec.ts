import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rundfunkbeitrag.de_1j3', ['https://www.rundfunkbeitrag.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
