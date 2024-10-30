/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "r3n7c06oo8evx5m",
    "created": "2024-10-28 15:14:10.056Z",
    "updated": "2024-10-28 15:14:10.056Z",
    "name": "stok_apotek",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vacesk9k",
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
        "id": "2ym6c1n2",
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
  const collection = dao.findCollectionByNameOrId("r3n7c06oo8evx5m");

  return dao.deleteCollection(collection);
})
