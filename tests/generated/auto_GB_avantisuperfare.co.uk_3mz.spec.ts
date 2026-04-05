import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_avantisuperfare.co.uk_3mz', ['https://www.avantisuperfare.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
