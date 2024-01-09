import loginData from "../support/loginData"
import data from "../support/commonSelectors"
let user = loginData().user
let pass = loginData().password
describe('Todo list App', () => {
  it('Login in todo list App', () => {
    cy.visit('/')
    cy.get(data.userSel).type(user)
    cy.get(data.passSel).type(pass)
    cy.get(data.buttonLogin).click()
    cy.get(data.settingButton).click();
    cy.get(data.nameLogin).should('have.text','WL')
  })
  it('Add new task in todo', () => {
    cy.visit('/')
    cy.get(data.userSel).type(user)
    cy.get(data.passSel).type(pass)
    cy.get(data.buttonLogin).click()
    cy.get('section > div > ul > li > button').click()
    cy.get('div.task_editor__input_fields > div:nth-child(1) > div > div > div > div').type('Test task Name = Ronald')
    cy.get('div.task_editor__input_fields > div:nth-child(2) > div > div > div > div').type('Test task description Estupinan')
    cy.get(data.buttonNewTask).click()
  })
})
//grissell.esquivel@wizeline.com
