import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_memodo.de_8g6', ['https://www.memodo.de/photovoltaik/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
