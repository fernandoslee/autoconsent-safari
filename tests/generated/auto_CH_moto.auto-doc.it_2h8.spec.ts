import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_moto.auto-doc.it_2h8', ['https://moto.auto-doc.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
