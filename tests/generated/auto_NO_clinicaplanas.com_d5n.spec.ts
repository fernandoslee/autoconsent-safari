import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_clinicaplanas.com_d5n', ['https://www.clinicaplanas.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
