import app from "../app.js";
import request from 'supertest'
import gameModel from "../models/gameModel.js";
import { v4 as uuidv4 } from 'uuid';

//creamos un id random y un body para testear
const randomId = uuidv4()
const body= {
    game:{
        id:randomId,
        state:{
            code:"2",
            description:"WON"
        }
    }
}
describe('GET /game/id',()=>{
    test('should responde with a 201 status code if the game was created',async()=>{
        const response = await request(app).get('/game/'+randomId).send()
        expect(response.statusCode).toBe(201)
    })
    test('should responde with a 200 status code if the game exist',async()=>{
        const response = await request(app).get('/game/'+randomId).send()
        expect(response.statusCode).toBe(200)
    })
    test('should responde with the correct data',async()=>{
        const response = await request(app).get('/game/'+randomId).send()
        expect(response.body.game.id).toBe(randomId)
        expect(response.body.game.state.code).toBe('1')
        expect(response.body.game.state.description).toBe('CREATED')
    })
})

describe('POST /game',()=>{
 
    afterAll(async() => {
        try{
            //después de los test borramos los datos agregados
            await gameModel.destroy({ where: { id: randomId } });
        }catch(error){
            console.log('error al intentar borrar datos de la db:',error)
        }
      });
   

    test('should responde with a 200 status code if the game was updated',async()=>{
        const response = await request(app).post('/game/').send(body)
        expect(response.statusCode).toBe(200)
    })
    test('should was updated with the correct data',async()=>{
        const response = await request(app).get('/game/'+randomId).send()
        expect(response.body.game.id).toBe(randomId)
        expect(response.body.game.state.code).toBe('2')
        expect(response.body.game.state.description).toBe('WON')
    })
    test('should responde with a 500 status code if we send incorrect data',async()=>{
        body.game.state.code='5'
        const response = await request(app).post('/game/').send(body)
        expect(response.statusCode).toBe(500)
    })
   
})