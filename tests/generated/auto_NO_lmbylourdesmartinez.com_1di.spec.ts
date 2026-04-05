import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_lmbylourdesmartinez.com_1di', ['https://www.lmbylourdesmartinez.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
