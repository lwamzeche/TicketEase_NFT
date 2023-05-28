

const instance = await NftMarket.deployed();

instance.mintToken("https://gateway.pinata.cloud/ipfs/Qmb4aom5xNRE5CBRHZsxCsYSdcmX8zfHXgM7ovZxLp3CqL?_gl=1*8jqh8y*rs_ga*NTk3MjMwNi4xNjg1MjQ0MDY5*rs_ga_5RMPXG14TE*MTY4NTI0NDA3MS4xLjEuMTY4NTI0NDYxOS42MC4wLjA.","500000000000000000", {value: "25000000000000000",from: accounts[0]})
instance.mintToken("https://gateway.pinata.cloud/ipfs/QmcqxBeE2XfagzEBYnaCUfHHTRLMiHi6xap6BDFLoNUfTN?_gl=1*agiajy*rs_ga*NTk3MjMwNi4xNjg1MjQ0MDY5*rs_ga_5RMPXG14TE*MTY4NTI0NDA3MS4xLjEuMTY4NTI0NDYxOS42MC4wLjA.","300000000000000000", {value: "25000000000000000",from: accounts[0]})