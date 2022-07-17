import { Sequelize } from "sequelize";
const config = require("./config");
import { initModels, Commit, CommitAttributes, CommitCreationAttributes } from "./models/init-models";

export default class GitMinnerDatabase {
    sequelize: Sequelize;
    constructor() {
        // create sequelize instance with database connection
        this.sequelize = new Sequelize(config.dbname, config.user, config.pass, config.options);
    }

    async run() {
        try {
            // load the model definitions into sequelize
            const { Commit } = initModels(this.sequelize);

            // create a new Order for the customer
            // @ts-ignore
            const attr: CommitAttributes = {
                message: 'test message',
                authorId: 1,
                featureId: 1,
                jiraId: 1,
                reviewerId: 2
            };

            // id: number;
            // authorId: number;
            // reviewerId: number;
            // featureId?: number;
            // jiraId?: number;
            // message?: string;

            await Commit.create(attr).then((commit2: Commit) => {
                console.log(commit2);
                // display list of orders
                return Commit.findAll({ where: { "authorId": 1 } }).then((rows: CommitAttributes[]) => {
                    rows.forEach(r => console.log(r.authorId + " " + r.message));
                });
            });
        } finally {
            this.sequelize.close();
        }
    }
}