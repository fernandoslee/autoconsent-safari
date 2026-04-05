import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lokschuppen-berlinski.de_dvf', ['https://www.lokschuppen-berlinski.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
