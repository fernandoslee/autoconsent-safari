import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_transpetro.com.br_imc', ['https://transpetro.com.br/en_us/transpetro-institucional/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
