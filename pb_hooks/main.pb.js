// pb_hooks/main.pb.js
//routerAdd("GET", "/*", $apis.static($os.dirFS("./pb_public"), false))

routerAdd("GET", "/{$}", (e) => {
    let name = e.request.pathValue("name")

    const html = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/hello.html`,
    ).render({
        "name": name,
    })

    return e.html(200, html)
})

routerAdd("GET", "/hello/{name}", (e) => {
    let name = e.request.pathValue("name")

    return e.json(200, { "message": "Hello " + name })
})

routerAdd("GET", "/{path...}", $apis.static(`${__hooks}/../pb_public`, false))
