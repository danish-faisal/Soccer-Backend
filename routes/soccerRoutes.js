import { addNewPlayer, getPlayers, getPlayerWithId } from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
        .post(addNewPlayer)
        .get(getPlayers);

    app.route('/player/:PlayerId')
        .get(getPlayerWithId);
}

export default routes;