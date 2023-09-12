const URL =
  "https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732";
describe("Scrape Transactions", () => {
  it("Visits the website and scrapes transactions", () => {
    cy.visit(URL);
    cy.contains("25 of 2875 Transactions")
      .parent()
      .then(($parentElement) => {
        const $divElements = $parentElement.find(".transaction-box");

        $divElements.each((index, element) => {
          const $vins = Cypress.$(element).find(".vin");
          const $vouts = Cypress.$(element).find(".vout");

          const vinsCount = $vins?.length;
          const voutsCount = $vouts?.length;
          if (voutsCount === 2 && vinsCount === 1) {
            const $txn = Cypress.$(element).find(".txn");
            cy.log(
              `The transaction hash with 1 Input and 2 output is ${$txn.text()}`
            );
          }
        });
      });
  });
});
