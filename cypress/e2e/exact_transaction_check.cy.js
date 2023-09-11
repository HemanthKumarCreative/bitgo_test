describe("Scrape Transactions", () => {
  it("Visits the website and scrapes transactions", () => {
    cy.visit(
      "https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732"
    );
    cy.contains("25 of 2875 Transactions")
      .parent()
      .then(($parentElement) => {
        const parentTag = $parentElement[0].tagName.toLowerCase();
        const parentClass = $parentElement.attr("class");

        cy.log(`Parent Element Tag Name: ${parentTag}`);
        cy.log(`Parent Element Class: ${parentClass}`);
      });
  });
});
