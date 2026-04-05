import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pitstopcamper.com_xzn', ['https://pitstopcamper.com/gb/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
