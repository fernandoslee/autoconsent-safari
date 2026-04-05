import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_resumeworded.com_8ga', ['https://resumeworded.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
