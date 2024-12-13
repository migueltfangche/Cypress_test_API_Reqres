// const { expect } = require("chai")


describe('template spec', () => {
  it('passes', () => {
    cy.request('GET',"https://reqres.in/api/users?page=2").then((response) => {
      expect(response.status).to.eq(200) // que el status sea 200
      expect(response.body).to.have.property('data') // encuentre en el cuerpo la propiedad "Data"
      expect(response.body.data).to.be.an('array') //encuentre en el cuerpo y en data, un array
      
      const users = response.body.data;
      const michael = users.find(user => user.email === 'michael.lawson@reqres.in');
        expect(michael).to.exist;
    })
    it('crear usuario', () => {
      const newUser = {
          "name": "morpheus",
          "job": "leader",
      }
    cy.request('POST',"https://reqres.in/api/users", newUser).then((response)=>{
      expect(response.status).to.eq('201')
      expect(response.body).to.have.property('name',newUser.name)
      expect(response.body).to.have.property('job',newUser.job)
      expect(response.body.data).to.have.property('id', 2)
      expect(response.body.data).to.have.property('email', 'janet.weaver@reqres.i')
    })
    })
  })
})