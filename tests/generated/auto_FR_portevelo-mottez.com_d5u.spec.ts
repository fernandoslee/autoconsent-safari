import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_portevelo-mottez.com_d5u', ['https://portevelo-mottez.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
