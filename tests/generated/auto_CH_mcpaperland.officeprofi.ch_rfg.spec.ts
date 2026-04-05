import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mcpaperland.officeprofi.ch_rfg', ['https://mcpaperland.officeprofi.ch/de'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
