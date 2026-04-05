import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_patrimonio.luganocultura.ch_261', ['https://patrimonio.luganocultura.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
