
describe('Primeras pruebas con JEST en React', () => {
    
    test('Esta prueba no debe de fallar', () => {
    
        // 1. inicializacion
    
        const message1 = 'Hola mundo';
    
        // 2. estimulo
    
        const message2 = message1.trim();
    
        // 3. Observamos el comportamiento... esperado
    
        expect(message1).toBe(message2);
        expect(message1).toBe(message2)
    })
    
})
