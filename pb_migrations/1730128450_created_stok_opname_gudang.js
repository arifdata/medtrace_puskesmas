/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "lw2gms1y0l73f5p",
    "created": "2024-10-28 15:14:10.056Z",
    "updated": "2024-10-28 15:14:10.056Z",
    "name": "stok_opname_gudang",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xwk5yatx",
        "name": "tanggal_so",
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
        "id": "r5wmchhz",
        "name": "data_so",
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
  const collection = dao.findCollectionByNameOrId("lw2gms1y0l73f5p");

  return dao.deleteCollection(collection);
})
