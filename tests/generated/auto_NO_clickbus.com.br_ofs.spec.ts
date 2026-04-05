import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_clickbus.com.br_ofs', ['https://www.clickbus.com.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
