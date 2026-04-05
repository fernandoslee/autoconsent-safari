import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_seerose-immenstaad.de_1m1', ['https://www.seerose-immenstaad.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
