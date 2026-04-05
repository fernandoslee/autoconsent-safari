import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_centrocomercialmendibil.com_ot2', ['https://www.centrocomercialmendibil.com/es/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
