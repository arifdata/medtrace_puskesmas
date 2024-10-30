/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7wzswolo4f1ze0a",
    "created": "2024-10-28 15:14:10.055Z",
    "updated": "2024-10-28 15:14:10.055Z",
    "name": "diagnosa",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6r5ywvhj",
        "name": "nama_penyakit",
        "type": "text",
        "required": false,
        "presentable": false,
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
  const collection = dao.findCollectionByNameOrId("7wzswolo4f1ze0a");

  return dao.deleteCollection(collection);
})
