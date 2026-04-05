import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_editor.p5js.org_v6z', ['https://editor.p5js.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CA'],
});
