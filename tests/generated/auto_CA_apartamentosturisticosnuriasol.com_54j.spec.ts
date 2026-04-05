import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_apartamentosturisticosnuriasol.com_54j', ['https://www.apartamentosturisticosnuriasol.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
