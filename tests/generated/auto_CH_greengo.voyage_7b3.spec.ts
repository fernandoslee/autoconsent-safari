import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_greengo.voyage_7b3', ['https://www.greengo.voyage/en'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
