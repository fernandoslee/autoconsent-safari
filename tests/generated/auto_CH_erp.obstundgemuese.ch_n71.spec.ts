import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erp.obstundgemuese.ch_n71', ['https://erp.obstundgemuese.ch/cargobikes'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
