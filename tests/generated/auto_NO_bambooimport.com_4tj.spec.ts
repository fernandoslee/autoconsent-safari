import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bambooimport.com_4tj', ['https://bambooimport.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
