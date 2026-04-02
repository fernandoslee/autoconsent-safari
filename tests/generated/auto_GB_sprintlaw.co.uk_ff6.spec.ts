import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_sprintlaw.co.uk_ff6', ['https://sprintlaw.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
