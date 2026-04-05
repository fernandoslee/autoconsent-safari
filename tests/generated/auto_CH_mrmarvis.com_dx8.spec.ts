import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mrmarvis.com_dx8', ['https://www.mrmarvis.com/ch'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
