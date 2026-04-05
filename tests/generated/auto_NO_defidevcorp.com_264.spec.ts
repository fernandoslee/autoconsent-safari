import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_defidevcorp.com_264', ['https://defidevcorp.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
