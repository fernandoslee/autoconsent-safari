import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_knowledge.essec.edu_5or', ['https://knowledge.essec.edu/en/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
