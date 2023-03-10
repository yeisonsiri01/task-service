const findAll = {
    tags: ["task"],
};
const findOne = {
    tags: ["task"],
    params: {
        type: 'object',
        properties: {
            id: {
                type: "number"
            },
        },
    },
};
const create = {
    tags: ["task"],
    body: {
        type: 'object',
        properties: {
            name: {
                type: "string"
            },
            description: {
                type: "string"
            },
        },
    },
};
const update = {
    tags: ["task"],
    params: {
        type: 'object',
        properties: {
            id:
                { type: "string" },
        },
    },
    body: {
        type: "object",
        properties: {
            name: { 
                type: "string" 
            },
            description: {
                type: "string"
            },
        },
    },
};
const remove = {
    tags: ["task"],
    params: {
        type: "object",
        properties: {
            id: { type: "number" },
        },
    },
};

module.exports = {
    findAll,
    findOne,
    create,
    update,
    remove,
}