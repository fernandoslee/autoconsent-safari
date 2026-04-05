import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_visitgenoa.it_v09', ['https://www.visitgenoa.it/it'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
