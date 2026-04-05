import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_fractalcycles.com_wwk', ['https://fractalcycles.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
