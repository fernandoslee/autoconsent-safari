import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_piecesauto.fr_90y', ['https://www.piecesauto.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
