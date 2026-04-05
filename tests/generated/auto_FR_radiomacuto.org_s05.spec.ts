import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_radiomacuto.org_s05', ['https://radiomacuto.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
