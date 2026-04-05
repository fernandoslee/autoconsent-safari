import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cifras.com.br_lks', ['https://www.cifras.com.br/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
