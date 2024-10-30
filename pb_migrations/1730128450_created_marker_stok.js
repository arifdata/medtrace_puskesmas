/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ruc4zrv74rvlbbw",
    "created": "2024-10-28 15:14:10.055Z",
    "updated": "2024-10-28 15:14:10.055Z",
    "name": "marker_stok",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ca3bzqoa",
        "name": "tanggal_catat",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      },
      {
        "system": false,
        "id": "hgjy4twt",
        "name": "data_marker",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
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
  const collection = dao.findCollectionByNameOrId("ruc4zrv74rvlbbw");

  return dao.deleteCollection(collection);
})
