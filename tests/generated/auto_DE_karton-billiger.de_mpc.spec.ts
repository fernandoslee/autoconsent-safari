import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_karton-billiger.de_mpc', ['https://karton-billiger.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
