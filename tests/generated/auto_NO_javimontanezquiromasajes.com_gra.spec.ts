import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_javimontanezquiromasajes.com_gra', ['https://www.javimontanezquiromasajes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
