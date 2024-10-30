/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "jbhdc4bom2rigle",
    "created": "2024-10-28 15:14:10.054Z",
    "updated": "2024-10-28 15:14:10.054Z",
    "name": "data_nakes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "cthw3emd",
        "name": "nama_nakes",
        "type": "text",
        "required": true,
        "presentable": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("jbhdc4bom2rigle");

  return dao.deleteCollection(collection);
})
