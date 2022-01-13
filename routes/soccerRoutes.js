import { addNewPlayer, deletePlayer, getPlayers, getPlayerWithId, updatePlayer } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
        .get(getPlayers);

    app.route('/player/:PlayerId')
        .get(getPlayerWithId)
        .put(updatePlayer)
        .delete(deletePlayer);
}

export default routes;