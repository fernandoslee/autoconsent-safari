import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_norfolkmead.co.uk_cek', ['https://www.norfolkmead.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
