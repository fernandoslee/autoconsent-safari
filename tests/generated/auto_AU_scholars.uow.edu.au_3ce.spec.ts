import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_scholars.uow.edu.au_3ce', ['https://scholars.uow.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
