import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_valaisanne.ch_4dp', ['https://www.valaisanne.ch/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
