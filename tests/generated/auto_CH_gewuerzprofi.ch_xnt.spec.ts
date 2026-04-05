import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_gewuerzprofi.ch_xnt', ['https://www.gewuerzprofi.ch/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
