import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cartes.gouv.fr_0ql', ['https://cartes.gouv.fr/explorer-les-cartes/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
