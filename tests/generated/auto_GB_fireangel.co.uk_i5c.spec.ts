import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fireangel.co.uk_i5c', ['https://www.fireangel.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
