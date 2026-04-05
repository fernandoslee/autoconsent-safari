import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_paketdepot-loerrach.de_99v', ['https://www.paketdepot-loerrach.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
