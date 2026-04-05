import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_investor.lilly.com_j9b', ['https://investor.lilly.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
