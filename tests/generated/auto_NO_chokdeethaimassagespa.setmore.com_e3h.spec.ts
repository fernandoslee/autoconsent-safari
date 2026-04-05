import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_chokdeethaimassagespa.setmore.com_e3h', ['https://chokdeethaimassagespa.setmore.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
