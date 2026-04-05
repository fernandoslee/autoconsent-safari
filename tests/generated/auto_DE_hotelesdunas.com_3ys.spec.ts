import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hotelesdunas.com_3ys', ['https://www.hotelesdunas.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
