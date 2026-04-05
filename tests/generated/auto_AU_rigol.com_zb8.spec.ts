import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_rigol.com_zb8', ['https://www.rigol.com/intl/index.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
