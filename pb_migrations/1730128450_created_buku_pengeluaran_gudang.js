/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "s72tsyyif7c8fn6",
    "created": "2024-10-28 15:14:10.053Z",
    "updated": "2024-10-28 15:14:10.053Z",
    "name": "buku_pengeluaran_gudang",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jjkqgy5m",
        "name": "tanggal_terima",
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
        "id": "tgaenovn",
        "name": "notes",
        "type": "email",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      },
      {
        "system": false,
        "id": "t9qsqa2z",
        "name": "data_pengeluaran",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSize": 2000000
        }
      },
      {
        "system": false,
        "id": "at8a1dx3",
        "name": "tujuan",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "8ket5g2ni7f1fll",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
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
  const collection = dao.findCollectionByNameOrId("s72tsyyif7c8fn6");

  return dao.deleteCollection(collection);
})
