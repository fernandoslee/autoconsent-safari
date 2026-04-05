import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_organizzazione.cai.it_nzs', ['https://www.cai.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
