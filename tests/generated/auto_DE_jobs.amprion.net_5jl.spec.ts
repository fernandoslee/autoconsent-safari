import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobs.amprion.net_5jl', ['https://jobs.amprion.net/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
