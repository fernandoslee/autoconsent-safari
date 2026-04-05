import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pccomponentes.com_zsa', ['https://www.pccomponentes.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
