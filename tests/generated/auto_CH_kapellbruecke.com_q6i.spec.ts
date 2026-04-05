import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kapellbruecke.com_q6i', ['https://www.kapellbruecke.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
