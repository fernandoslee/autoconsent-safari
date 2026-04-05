import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_visitmodena.it_hcn', ['https://www.visitmodena.it/it'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
