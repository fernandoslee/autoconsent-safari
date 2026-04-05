import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jadopteunprojet.com_n7k', ['https://www.jadopteunprojet.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
