import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mc2-technologies.com_r4r', ['https://www.mc2-technologies.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
