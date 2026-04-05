import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hytechydroponics.com_ljw', ['https://hytechydroponics.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
