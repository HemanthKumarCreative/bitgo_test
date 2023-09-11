describe("Check Heading", () => {
  it("Visits the website and checks the heading [ 25 of 2875 Transactions ]", () => {
    cy.visit(
      "https://blockstream.info/block/000000000000000000076c036ff5119e5a5a74df77abf64203473364509f7732"
    );

    cy.contains("25 of 2875 Transactions").should("exist");
  });
});
