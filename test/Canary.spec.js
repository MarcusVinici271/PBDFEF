// Teste que sempre passa
import { assert } from "chai";

describe("Canary Tests", function() {
  //coleção de testes desta suite
  it("should pass", function() {
    const result = true;
    assert.isTrue(result);
  })
  
})