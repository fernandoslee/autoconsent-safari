import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sinnsucher.de_v7e', ['https://www.sinnsucher.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
