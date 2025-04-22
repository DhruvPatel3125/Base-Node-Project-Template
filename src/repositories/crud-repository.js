const { response } = require("express");
const {Logger} = require("../config")

class CrudRepositry{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }
        catch(error){
            console.log(error);
            Logger.error("something went wrong in the crud repository: create");
            throw error;
        }
    }
    async update(id,data) {
        try{
            const response = await this.model.update(data,{
                where: {
                    id: data
                }
            });
            return response;
        }
        catch(error){
            console.log(error);
            Logger.error("something went wrong in the crud repository: get");
            throw error;
        }
    }
    async destroy(data) {
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }
        catch(error){
            console.log(error);
            Logger.error("something went wrong in the crud repository: destroy");
            throw error;
        }
    }
}
module.exports = CrudRepositry;