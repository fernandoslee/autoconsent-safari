import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_fireangel.co.uk_1ax', ['https://www.fireangel.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
