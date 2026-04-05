import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_touren-termine.adfc.de_dk5', ['https://touren-termine.adfc.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
