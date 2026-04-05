import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_turismodecordoba.org_lua', ['https://www.turismodecordoba.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
