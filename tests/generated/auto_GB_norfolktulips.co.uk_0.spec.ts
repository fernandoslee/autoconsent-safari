import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_norfolktulips.co.uk_0', ['https://www.norfolktulips.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
