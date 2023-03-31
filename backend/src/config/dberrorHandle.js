const Sequelize = require('sequelize');

function handleDbError(databaseError) {
    let errorPaths;
    if(databaseError.errors){
        let errorPath = [];
        for(let i = 0; i < databaseError.errors.length; i++){
            errorPath.push(databaseError.errors[i].path); 
        }
        errorPaths = errorPath.join();
    }
    if (databaseError instanceof Sequelize.ForeignKeyConstraintError) {
        const foreignKeyError = databaseError.fields.join();
        const errorResponse = {
            error: `${databaseError.parent.sqlMessage}`,
            detail: `Bad Request for Resource ${foreignKeyError}`
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.UniqueConstraintError){
        const errorResponse = {
            error: `Unique Key Error for ${errorPaths}`,
            detail: `Ensure that the ${errorPaths} are unique`
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.TimeoutError){
        const errorResponse = {
            error: `${databaseError.parent.sqlMessage}`,
            detail: "Connection Time out"
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.ExclusionConstraintError){
        const errorResponse = {
            error: `${databaseError.parent.sqlMessage}`,
            detail: "exclusion constraint is violated"
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.DatabaseError){
        const errorResponse = {
            error: `${databaseError.parent.sqlMessage}`,
            detail: "Internal Server Error"
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.ValidationError){
        const errorResponse = {
            error: `${errorPaths} cannot be null`,
            detail: "Bad Request for Resource"
        }
        return errorResponse;
    }
    else if(databaseError instanceof Sequelize.BaseError){
        const errorResponse = {
            error: `${databaseError.parent.sqlMessage}`,
            detail: "Internal Server Error"
        }
        return errorResponse;
    }
}

module.exports = {
    handleDbError
};