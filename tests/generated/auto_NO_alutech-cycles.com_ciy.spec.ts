import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alutech-cycles.com_ciy', ['https://alutech-cycles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
