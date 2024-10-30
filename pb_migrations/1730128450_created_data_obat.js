/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "vm9k7k758roi50q",
    "created": "2024-10-28 15:14:10.054Z",
    "updated": "2024-10-28 15:14:10.054Z",
    "name": "data_obat",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "66jrtmb9",
        "name": "nama_obat",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
        "system": false,
        "id": "dliqszkz",
        "name": "is_antibiotik",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hbwo6ir4",
        "name": "is_narkotik_psikotropik",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "jzqgiegm",
        "name": "is_non_generik",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "qbswbbyv",
        "name": "is_alkes",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "hxt3iix6",
        "name": "is_barang_jkn",
        "type": "bool",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("vm9k7k758roi50q");

  return dao.deleteCollection(collection);
})
