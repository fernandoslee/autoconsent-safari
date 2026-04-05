import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_jobs.hornbach.ch_9a3', ['https://jobs.hornbach.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
