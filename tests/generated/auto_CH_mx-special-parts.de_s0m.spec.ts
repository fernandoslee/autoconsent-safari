import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mx-special-parts.de_s0m', ['https://www.mx-special-parts.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
