export function validate(schema, data) {
    return schema
        .validate(data, { abortEarly: false })
        .catch((err) => new Promise((resolve, reject) => reject(err.inner)));
}

export function validateAt(schema, data, name) {
    return schema
        .validateAt(name, data)
}