import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_momo-kombucha.com_37z', ['https://momo-kombucha.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
