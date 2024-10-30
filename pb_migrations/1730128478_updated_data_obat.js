/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vm9k7k758roi50q")

  // remove
  collection.schema.removeField("aaico7r2")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vm9k7k758roi50q")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aaico7r2",
    "name": "bentuk_sediaan",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "TABLET",
        "SIRUP",
        "KAPSUL",
        "BUNGKUS",
        "TUBE",
        "KRIM",
        "PCS",
        "BOTOL",
        "AMPUL",
        "SET",
        "KOTAK"
      ]
    }
  }))

  return dao.saveCollection(collection)
})
