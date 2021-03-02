describe("Registrar Entrada", function () {
  it("registra entrada para Javier", function () {
    cy.viewport(986, 789);

    cy.visit(
      "https://docs.google.com/forms/d/e/1FAIpQLSc2CmlAh52gmhuPynfqSkbZMYJNrAXPSCtaijQC3dFEfWdOKg/viewform"
    );

    cy.get(
      ".quantumWizTextinputPaperinputEl > .quantumWizTextinputPaperinputMainContent > .quantumWizTextinputPaperinputContentArea > .quantumWizTextinputPaperinputInputArea > .quantumWizTextinputPaperinputInput"
    ).click();

    cy.get(
      ".quantumWizTextinputPaperinputEl > .quantumWizTextinputPaperinputMainContent > .quantumWizTextinputPaperinputContentArea > .quantumWizTextinputPaperinputInputArea > .quantumWizTextinputPaperinputInput"
    ).type("Jorge Gonzalez");

    cy.get(
      "#i9 > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
    ).click();

    cy.get(
      "#i25 > .appsMaterialWizToggleRadiogroupRadioButtonContainer > .appsMaterialWizToggleRadiogroupOffRadio"
    ).click();

    cy.get(
      ".freebirdFormviewerViewNavigationButtonsAndProgress > .freebirdFormviewerViewNavigationLeftButtons > .appsMaterialWizButtonEl > .appsMaterialWizButtonPaperbuttonContent > .appsMaterialWizButtonPaperbuttonLabel"
    ).click();
  });
});
