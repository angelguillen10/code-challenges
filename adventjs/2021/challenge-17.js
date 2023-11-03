// https://adventjs.dev/challenges/17

function countPackages(carriers, carrierID) {
    let [ name, packages, sub ] = carriers.find(([id]) => id === carrierID);
    sub.forEach(s => packages = packages + countPackages(carriers, s));
    return packages;
}