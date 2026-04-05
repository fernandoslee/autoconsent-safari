import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abandonware-magazines.org_gna', ['https://abandonware-magazines.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
