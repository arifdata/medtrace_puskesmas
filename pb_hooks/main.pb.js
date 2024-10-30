// pb_hooks/main.pb.js


routerAdd("get", "/", (c) => {
    const name = c.pathParam("name")

    const html = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/hello.html`,
    ).render({
        "name": name,
    })

    return c.html(200, html)
})

routerAdd("get", "/yellow", (c) => {
    const name = c.pathParam("name")

    const html = $template.loadFiles(
        `${__hooks}/views/layout.html`,
        `${__hooks}/views/hello2.html`,
    ).render({
        "name": name,
    })

    return c.html(200, html)
})

onModelAfterUpdate((e) => {
    console.log("user updated...", e.model.get("email"))
}, "users")
