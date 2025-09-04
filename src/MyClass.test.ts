// Importa la classe che vuoi testare
import { MyClass } from './MyClass';
import {describe, expect, it} from '@jest/globals';

// Descrive la suite di test per la classe MyClass
describe('MyClass', () => {

  // Descrive un caso di test specifico
  it('should greet with the correct name', () => {
    // 1. Arrange: Prepara gli oggetti e i dati necessari per il test
    const instance = new MyClass('World');

    // 2. Act: Esegui il metodo che vuoi testare
    const greeting = instance.greet();

    // 3. Assert: Verifica che il risultato sia quello atteso
    expect(greeting).toBe('Hello, World!');
  });

  // Puoi aggiungere altri test per scenari diversi
  it('should handle different names', () => {
    const instance = new MyClass('Alice');
    const greeting = instance.greet();
    expect(greeting).toBe('Hello, Alice!');
  });
});