import gameModel from "../models/gameModel.js";
import config from "../config/index.js"
 export const getOrCreateGame = async (req, res) => {
  try {
    //query de búsqueda
    const { ID } = req.params;
    const [game, created] = await gameModel.findOrCreate({
      where: {
        id: ID,
      },
      defaults: {
        code: "1",
        description: "CREATED",
      },
    });
    //creamos el objeto de respuesta para la peticion
    const response = {
      game: {
        id: game.id,
        created: game.createdAt,
        state: {
          code: game.code,
          description: game.description,
        },
        cells: [],
      },
    };

    //si todo salio correctamente enviamos la respuesta
    if (created && game) {
      res.status(201).send(response);
    } else if (!created && game) {
      res.status(200).send(response);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    if(config.NODE_ENV!=='production'){
      res.status(500).send(error)
    }
    else{
      res.sendStatus(500)
    }
  }
};

export const saveGame = async (req, res) => {
//query de para actualizar los datos del juego
  try {
    const updated = await gameModel.update(
      {
        code: req.body.game.state.code,
        description:req.body.game.state.description
      },
      {
        where: {
          id: req.body.game.id,
        },
      }
    );
    res.sendStatus(200)
  } catch (error) {
    if(config.NODE_ENV!=='production'){
      res.status(500).send(error)
    }
    else{
      res.sendStatus(500)
    }
  }
};

