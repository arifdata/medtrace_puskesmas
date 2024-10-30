/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7yir88ri2qfm7ql",
    "created": "2024-10-28 15:14:10.056Z",
    "updated": "2024-10-28 15:14:10.056Z",
    "name": "stok_gudang",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ngbjueue",
        "name": "field",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "vm9k7k758roi50q",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "qxcp2cg0",
        "name": "jumlah",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": false
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7yir88ri2qfm7ql");

  return dao.deleteCollection(collection);
})
