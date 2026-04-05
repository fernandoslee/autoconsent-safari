import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_iberinform.pt_an3', ['https://www.iberinform.pt/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
