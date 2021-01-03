var subdomainVisits = function (cpdomains) {
  let map = new Map();

  for (i = 0; i < cpdomains.length; i++) {
    let count = cpdomains[i].split(" ")[0];
    let domain = cpdomains[i].split(" ")[1].split(".");

    let domains;
    for (j = domain.length - 1; j >= 0; j--) {
      if (domains) {
        domains = domain[j] + "." + domains;
      } else {
        domains = domain[j];
      }

      if (!map.has(domains)) {
        map.set(domains, count);
      } else {
        map.set(domains, parseInt(map.get(domains)) + parseInt(count));
      }
    }
  }

  let result = [];
  map.forEach((value, key) => {
    result.push(value + " " + key);
  });

  return result;
};

console.log(
  subdomainVisits([
    "900 google.mail.com",
    "50 yahoo.com",
    "1 intel.mail.com",
    "5 wiki.org",
  ])
);
