import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_eltallerdelmodelista.com_z32', ['https://www.eltallerdelmodelista.com/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
