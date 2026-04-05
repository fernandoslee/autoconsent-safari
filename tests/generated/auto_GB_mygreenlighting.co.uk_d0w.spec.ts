import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_mygreenlighting.co.uk_d0w', ['https://www.mygreenlighting.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
