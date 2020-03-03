const AppDAO = require("./dao")
const TestRepository = require("./testRepository")

function main() {
    const dao = new AppDAO('./database.sqlite3')
    const tr = new TestRepository(dao)

    tr.createTable()
        .then(() => {
            // insert and return value
            return tr.insert("test")
                .then((res) => {
                    return (res)
                })
        })
        .then((data) => {
            // select and show result
            tr.getById(data.id)
                .then((data) => {
                    console.log(data)
                })
        })

}

main()