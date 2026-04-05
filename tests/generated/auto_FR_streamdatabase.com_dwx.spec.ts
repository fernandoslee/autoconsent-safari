import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_streamdatabase.com_dwx', ['https://www.streamdatabase.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
