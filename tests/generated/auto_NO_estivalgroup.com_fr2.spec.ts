import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_estivalgroup.com_fr2', ['https://www.estivalgroup.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
