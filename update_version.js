const fs = require('fs');

function updateVersion(manifestFile) {
    const day = new Date();
    const version = `${day.getFullYear()}.${day.getMonth() + 1}.${day.getDate()}`;
    const manifest = require(manifestFile);
    manifest.version = version;
    fs.writeFileSync(manifestFile, JSON.stringify(manifest, null, 2));
}

updateVersion('./addon/manifest.mv3.json');
updateVersion('./addon/manifest.firefox.json');
fs.writeFileSync(
    path.join(__dirname, 'addon', 'manifest.safari.json'),
    JSON.stringify({ ...JSON.parse(fs.readFileSync(path.join(__dirname, 'addon', 'manifest.safari.json'), 'utf8')), version: v }, null, 4) +
        '\n',
);
