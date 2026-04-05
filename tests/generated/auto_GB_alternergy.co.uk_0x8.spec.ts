import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_alternergy.co.uk_0x8', ['https://www.alternergy.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
