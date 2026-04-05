import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_unitedconsumers.com_f40', ['https://www.unitedconsumers.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
