import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_chronohunter.com_ft7', ['https://chronohunter.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
