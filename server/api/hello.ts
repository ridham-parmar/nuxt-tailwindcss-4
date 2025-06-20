export default defineEventHandler(async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                hello: "world"
            })
        }, 5000);
    })
});
