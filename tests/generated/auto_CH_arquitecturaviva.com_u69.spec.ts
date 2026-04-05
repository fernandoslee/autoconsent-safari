import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_arquitecturaviva.com_u69', ['https://arquitecturaviva.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
